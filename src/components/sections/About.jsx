import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";

const About = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>Texxt</Box>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default About;
