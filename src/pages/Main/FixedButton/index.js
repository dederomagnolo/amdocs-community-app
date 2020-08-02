import React from 'react';

import { Container, Title, Wrapper } from './styles';


const FixedButton = ({ styles, onClick }) => {
  return (
    <Container color={styles.colors} onClick={() => onClick()}>
      <Wrapper color={styles.colors}>
        <Title color={styles.colors}>
          Click here to see the rules
        </Title>
      </Wrapper>
    </Container>
  );
}

export default FixedButton;