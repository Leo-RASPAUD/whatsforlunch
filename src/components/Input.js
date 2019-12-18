import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 8px 0;
  font-size: 16px;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-style: italic;
`;

const Input = styled.input`
  border: 2px solid coral;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
`;

export default ({ label, onChange, defaultValue }) => {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type="text"
        defaultValue={defaultValue}
        onChange={onChange}
        id={label}
      />
    </Container>
  );
};
