import React, { useEffect, useState } from "react";
import "./TestimonialCards.css";
import comma from "../../assets/images/testimonials/comma.png"

type Testimonial = {
    text: string;
    name: string;
    image: string;
    accent: string;
};


const TestimonialCards: React.FC = () => {

    const [testimonials, seTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        fetch("/data/testimonials.json")
            .then(response => response.json())
            .then(data => seTestimonials(data))
            .catch(error => console.error("Error loading products:", error));
    }, []);


    return (
        <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
                <div className={`testimonial-card ${testimonial.accent ? `accent-${testimonial.accent}` : ""}`} key={index}>
                    <div className="quote"> <img src={comma} className="comma" /> <img src={comma} className="comma" /></div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-footer">
                        <img src={testimonial.image} alt={testimonial.name} className="avatar" />
                        <span className="testimonial-name">{testimonial.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestimonialCards;
