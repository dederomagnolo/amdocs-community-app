import React from 'react';
import { Container, Footer, Actions, Button, Text, BoldText} from './styles';
import Like from '../../../assets/like.svg';

export default function CardUser({ user, styles, adopt }) {
  return (
    <Container>
      <img src={user.avatar} alt={user.name} />
      <Footer color={styles.colors}>
        <strong>{user.name}</strong>
        <BoldText color={styles.colors}>{`I wish I could get: ${user.desired}`}</BoldText>
        <BoldText color={styles.colors}>{`Cloth size: ${user.clothSize}`}</BoldText>
        <BoldText color={styles.colors}>{`Shoes size: ${user.shoesSize}`}</BoldText>
      </Footer>
      <Actions>
        <Button color={styles.colors} onClick={() => adopt(user._id)}>
          <img src={Like} alt="like" />
          <Text color={styles.colors}>Adopt</Text>
        </Button>
      </Actions>
    </Container>
  );
}
