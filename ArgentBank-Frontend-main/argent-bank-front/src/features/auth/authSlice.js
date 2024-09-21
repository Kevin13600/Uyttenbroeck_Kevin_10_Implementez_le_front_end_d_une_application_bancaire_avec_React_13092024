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
        // Suppose that the token is directly in response.data
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
        if (!token) {
          throw new Error('No token found');
        }
  
        const response = await axios.get(`${API_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
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
  

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
          // Si le payload est directement une chaîne de caractères (message d'erreur du backend)
          state.error = action.payload;
        } else if (action.payload && action.payload.message) {
          // Si l'erreur contient un champ "message"
          state.error = action.payload.message;
        } else {
          // Si aucune des structures d'erreur n'est présente, fallback à l'erreur de Redux
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
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;