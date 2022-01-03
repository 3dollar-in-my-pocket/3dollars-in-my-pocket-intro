import React from "react";
import { TestimonialItemStyled } from "./Testimonials.styles";

const TestimonialItem = ({ emoji, desc, nickname }) => {
  return (
    <TestimonialItemStyled className="testimonial_item">
      <p className="testimonial_emoji">{emoji}</p>
      <p className="testimonial_desc">{desc}</p>
      <p className="testimonial_nickname">{nickname}</p>
    </TestimonialItemStyled>
  );
};

export default TestimonialItem;
