import React from "react";
import "./TestimonialCards.css";
import comma from "../../assets/images/testimonials/comma.png"

const testimonials = [
    {
        text: "So I had very little pain the rest of that day! Probably a 4 later on! Was so amazing! No pain pills for a day! Thank you and Dad! You 2 are my angels!",
        name: "Nic",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        accent: "blue",
    },
    {
        text: "I was very stressed and a lot of anxiety when I arrived for a session. After 30 minutes my stress and anxiety had dropped from 8 down to a 1. Thank you so much.",
        name: "Joe",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        name: "Grace Scott",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        name: "Antonio EVA",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        accent: "orange",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        name: "Sophia Lee",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        name: "Sophia Lee",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        name: "Olivia Miller",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        name: "Sophia Lee",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
    }
];

const TestimonialCards: React.FC = () => {
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
