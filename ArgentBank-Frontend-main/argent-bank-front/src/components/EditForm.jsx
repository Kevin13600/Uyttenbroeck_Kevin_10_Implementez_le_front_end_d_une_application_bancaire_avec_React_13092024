import React from 'react';
import styled from 'styled-components';

const EditFormContainer = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 100px;
  text-align: right;
  margin-right: 10px;
  color: #fff;
`;

const Input = styled.input`
  padding: 3px;
  font-size: 1rem;
  width: 150px;
  border-radius: 5px;
  border: none;
`;

const DisabledInput = styled(Input)`
  background-color: #B3B3B3;
  color: #666;
  cursor: not-allowed;
`;

const Button = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  margin-top: 1rem;
  width: 100px;
  margin-right: 5px;
  margin-left: 5px;
`;

const EditForm = ({ editedUserName, setEditedUserName, user, handleSaveEdit, handleCancelEdit, }) => { 
  return (
    <EditFormContainer onSubmit={handleSaveEdit}>
      <InputGroup>
        <Label htmlFor="username">User Name :</Label>
        <Input
          id="username"
          type="text"
          value={editedUserName}
          onChange={(e) => setEditedUserName(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="firstname">First Name :</Label>
        <DisabledInput
          id="firstname"
          type="text"
          value={user.firstName}
          disabled
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="lastname">Last Name :</Label>
        <DisabledInput
          id="lastname"
          type="text"
          value={user.lastName}
          disabled
        />
      </InputGroup>
      <div>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={handleCancelEdit}>Cancel</Button>
      </div>
    </EditFormContainer>
  );
};

export default EditForm;
