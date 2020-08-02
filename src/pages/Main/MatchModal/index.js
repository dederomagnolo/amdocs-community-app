import React from 'react';
import { Container, Avatar, Button } from './styles';

export default function Match({ user, onClose }) {
  return (
    <Container>
      <strong>{`Do you want to adopt ${user.name} ?`}</strong>
      <Avatar src={user.avatar} alt=""/>
      <p>{user.bio}</p>
      <Button type= "button" onClick={onClose}>Adopt</Button>
      <Button type= "button" onClick={onClose}>Go back</Button>
    </Container>
  );
}
