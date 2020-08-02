import React from 'react';
import { Container, Avatar, Button } from './styles';

export default function Match({ user, onClose }) {
  return (
    <Container>
      <Avatar src={user.avatar} alt=""/>
      <strong>{user.name}</strong>
      <p>{user.bio}</p>
      <Button type= "button" onClick={onClose}>FECHAR</Button>
    </Container>
  );
}
