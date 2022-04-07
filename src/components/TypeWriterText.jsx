import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const TypeWriterText = () => {
  return (
    <>
      <Title>
        <p>Discover a new era of cool </p>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">NFTs.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-2">Collectibles.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class="text-3">Ape Killers!</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Subtitle>Bored of Apes? Try Something New</Subtitle>
      <ButtonContainer>
        <Button text="Explore" link="#about" />
      </ButtonContainer>
    </>
  );
};

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  font-weight: 500;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: monospace;
  }

  .text {
    &-1 {
      color: lightseagreen;
    }
    &-2 {
      color: goldenrod;
    }
    &-3 {
      color: orangered;
    }
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.Rgba}, 0.6)`};
  margin-bottom: 1rem;
  font-weight: 500;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;
export default TypeWriterText;
