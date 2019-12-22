import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 16px 0;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-style: italic;
  font-size: inherit;
  color: #e91e63;
`;

const Input = styled.input`
  border: 2px solid #2f2e2e;
  background: transparent;
  border-radius: 4px;
  padding: 8px;
  color: currentColor;
  font-size: inherit;
`;

export default ({ label, onChange, defaultValue }) => {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <Input type="text" defaultValue={defaultValue} onChange={onChange} id={label} />
    </Container>
  );
};
