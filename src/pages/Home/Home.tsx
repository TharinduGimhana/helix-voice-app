import React from "react";
import Background from "./background";
import Microphone from "./microphone";
import VoiceSense from "./VoiceSense";
import VoiceInfo from "./VoiceInfo";

const Home: React.FC = () => {
  return <div>
    <Background />
    <Microphone />
    <VoiceSense />
    <VoiceInfo />
  </div>;
};

export default Home;
