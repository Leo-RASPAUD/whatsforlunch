import React from 'react';
import Title from './Title';
import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  margin: 16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default ({ openingHours }) => {
  if (!openingHours) {
    return null;
  }
  return (
    openingHours && (
      <Container>
        <Title>Opening hours</Title>
        <List>
          {openingHours.weekday_text.map(a => (
            <li key={a} style={{ textAlign: 'left', paddingBottom: 8 }}>
              {a}
            </li>
          ))}
        </List>
      </Container>
    )
  );
};
