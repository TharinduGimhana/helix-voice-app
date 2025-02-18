import React from "react";
import Background from "./background";
import Microphone from "./microphone";
import VoiceSense from "./VoiceSense";
import VoiceInfo from "./VoiceInfo";
import ProductInfo from "./ProductInfo";
import VoiceNotes from "./VoiceNotes";

const Home: React.FC = () => {
  return <div>
    <Background />
    <Microphone />
    <VoiceSense />
    <VoiceInfo />
    <ProductInfo />
    <VoiceNotes />
  </div>;
};

export default Home;
