import React from 'react';
import { Container, Avatar, Button } from './styles';

export default function Info({ onClose }) {
  return (
    <Container>
      <strong>Information</strong>
      <Button type= "button" onClick={onClose}>Go back</Button>
    </Container>
  );
}
