import React from "react";
import Background from "./background";
import Microphone from "./microphone";
import VoiceSense from "./VoiceSense";

const Home: React.FC = () => {
  return <div>
    <Background />
    <Microphone />
    <VoiceSense />
  </div>;
};

export default Home;
