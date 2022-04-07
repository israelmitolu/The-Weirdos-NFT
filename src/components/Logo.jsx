import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">w.</Link>
    </LogoText>
  );
};

const LogoText = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-style: italic;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;
export default Logo;
