import React from "react";
import TestimonialList from "./TestimonialList";
import TestimonialsStyled from "./Testimonials.styles";
import { reviewsData } from "../../data";

const Testimonials = () => {
  return (
    <TestimonialsStyled>
      <TestimonialList items={reviewsData} />
    </TestimonialsStyled>
  );
};

export default Testimonials;
