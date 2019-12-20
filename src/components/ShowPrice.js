import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  position: relative;
  margin-right: 16px;
 opacity: ${props => (props.price >= props.item ? 1 : 0.5)}

  &:before {
  font-size: 24px;
    content: '$';
    position: absolute;
  }
`;

export default ({ price, item }) => {
  return <Span item={item} price={price} />;
};
