import React from "react";
import TestimonialCards from "./TestimonialCards";
import Background from "../../components/Background";

const Testimonials: React.FC = () => {
  return <div>
    <Background title={
      <h1>What people are saying <br />
        about us</h1>
    } />
    <TestimonialCards />
  </div>;
};

export default Testimonials;
