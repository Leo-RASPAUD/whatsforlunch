import React from 'react';
import Title from './Title';
import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  margin: 16px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export default ({ reviews }) => {
  if (!reviews) {
    return null;
  }
  return (
    <Container>
      <Title>Reviews</Title>
      <List>
        {reviews
          .filter(item => item.text)
          .map(review => (
            <li key={review.text} style={{ textAlign: 'left', paddingBottom: 8 }}>
              {review.text}
            </li>
          ))}
      </List>
    </Container>
  );
};
