import React from "react";
import styled from "styled-components";
import Gif from "../assets/Home Video.mp4";

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={Gif} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

export default CoverVideo;
