import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../features/auth/authSlice';
import styled from 'styled-components';
import AccountList from '../components/AccountList';
import EditForm from '../components/EditForm';
import WelcomeSection from '../components/WelcomeSection';  // Import du nouveau composant

const MainContainer = styled.main`
  flex: 1;
  background-color: #12002b;
  padding: 2rem;
  line-height: 1.2;
`;

function Profile() {
  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserName, setEditedUserName] = useState('');

  useEffect(() => {
    if (token && !user) {
      dispatch(getUserProfile());
    }
    if (user) {
      setEditedUserName(user.userName || '');
    }
  }, [dispatch, user, token]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUserName(user.userName || '');
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(editedUserName)).then(() => {
      dispatch(getUserProfile()); // Re-fetch profile after update
    });
    setIsEditing(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data available. Please log in.</div>;

  return (
    <MainContainer className="main bg-dark">
      <WelcomeSection
        user={user}
        isEditing={isEditing}
        handleEditClick={handleEditClick}
      />
      {isEditing && (
        <EditForm
          editedUserName={editedUserName}
          setEditedUserName={setEditedUserName}
          user={user}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
        />
      )}
      <AccountList />
    </MainContainer>
  );
}

export default Profile;
