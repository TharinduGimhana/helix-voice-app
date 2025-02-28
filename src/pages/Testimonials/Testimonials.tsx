import React from "react";
import TestimonialCards from "./TestimonialCards";
import Background from "../../components/Background";

const Testimonials: React.FC = () => {
  return <div>
    <Background title={
      <h1>What People are Saying <br />
        About Us</h1>
    } />
    <TestimonialCards />
  </div>;
};

export default Testimonials;
