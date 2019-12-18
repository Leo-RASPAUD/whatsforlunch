import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: 2px solid coral;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
`;

export default ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
