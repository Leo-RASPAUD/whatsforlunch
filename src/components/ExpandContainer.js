import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: ${props => (props.expanded ? (window.innerWidth > 450 ? '250px' : 'inherit') : '50px')};
  background: ${props => (props.expanded ? 'inherit' : '#262627')};
  overflow: hidden;
  transition: background 0.3s ease-in-out;
  color: ${props => (props.expanded ? 'inherit' : '#e8e8e8')};
  margin-bottom: 16px;
`;

const ChildrenContainer = styled.div`
  opacity: ${props => (props.expanded ? '1' : '0')};
`;

const ChevronContainer = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: #808080;
  font-size: 24px;
  color: #e8e8e8;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;

const Chevron = styled.span`
  border-style: solid;
  border-width: 4px 4px 0 0;
  content: '';
  display: inline-block;
  height: 0.45em;
  position: relative;
  top: 7px;
  transform: rotate(45deg);
  vertical-align: top;
  width: 0.45em;
  color: #808080;
`;

export default ({ children, expanded, expand, label }) => {
  return (
    <Container expanded={expanded}>
      <>
        {!expanded && (
          <ChevronContainer
            onClick={() => {
              if (!expanded) {
                expand(true);
              }
            }}
          >
            <span>{label}</span>
            <Chevron />
          </ChevronContainer>
        )}
        <ChildrenContainer expanded={expanded}>{children}</ChildrenContainer>
      </>
    </Container>
  );
};
