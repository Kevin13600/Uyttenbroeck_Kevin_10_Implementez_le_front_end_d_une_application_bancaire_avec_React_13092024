import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../services/api';

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
    try {
      console.log('Sending login request with:', credentials);
      const response = await axios.post(`${API_URL}/user/login`, credentials);
      console.log('Login response:', response.data);
      // Lors de la connexion, on stocke le jeton renvoyé par le backend dans le localStorage
      if (response.data && response.data.body && response.data.body.token) {
        localStorage.setItem('token', response.data.body.token);
        return response.data.body;
      } else {
        return rejectWithValue('Invalid response structure from server');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || 'An error occurred during login');
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'auth/getUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token used for profile request:', token);

      if (!token) {
        throw new Error('No token found');
      }

      console.log('Sending GET request for profile');
      const response = await axios.get(`${API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Profile response:', response.data);

      if (response.data && response.data.body) {
        return response.data.body;
      } else {
        return rejectWithValue('Invalid response structure from server');
      }
    } catch (error) {
      console.error('Get user profile error:', error);
      return rejectWithValue(error.response?.data || 'An error occurred while fetching the profile');
    }
  }
);
  

/* Le thunk checkAuth vérifie si un jeton est présent dans le localStorage au moment où 
l'application est initialisée */

export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, { dispatch, rejectWithValue }) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await dispatch(getUserProfile());
        return token;
      } catch (error) {
        //  Si la récupération du profil échoue, le jeton est supprimé du localStorage
        localStorage.removeItem('token');
        return rejectWithValue('Authentication failed');
      }
    }
    return rejectWithValue('No token found');
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (userName, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await axios.put(`${API_URL}/user/profile`, { userName }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.body;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update profile');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /* La déconnexion est bien gérée avec l'action logout, 
    qui supprime le jeton du localStorage et réinitialise l'état user et token */
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload && action.payload.token) {
          state.isLoading = false;
          state.token = action.payload.token;
          state.error = null;
        } else {
          state.isLoading = false;
          state.error = 'Invalid response from server';
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message || 'An unknown error occurred during login';
        }
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload.message || 'Failed to fetch user profile';
        } else {
          state.error = action.error.message || 'An unknown error occurred while fetching user profile';
        }
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.token = null;
        state.user = null;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...state.user, userName: action.payload.userName };
    })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;