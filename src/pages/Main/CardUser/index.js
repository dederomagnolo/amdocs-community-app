import React from 'react';

import { Container, Footer, Actions, Button, Text} from './styles';
import Like from '../../../assets/like.svg';

export default function CardUser({ user, styles, like, dislike }) {
  return (
    <Container>
      <img src={user.avatar} alt={user.name} />
      <Footer color={styles.colors}>
        <strong>{user.name}</strong>
        <p>{user.bio}</p>
      </Footer>
      <Actions>
        <Button color={styles.colors} onClick={() => like(user._id)}>
          <img src={Like} alt="like" />
          <Text color={styles.colors}>Adopt</Text>
        </Button>
      </Actions>
    </Container>
  );
}
