import React from "react";
import TestimonialItem from "./TestimonialItem";
import { TestimonialListStyled } from "./Testimonials.styles";
import { useMediaQuery } from "react-responsive";

const TestimonialList = ({ items }) => {
  const under1280 = useMediaQuery({ query: "(max-width: 1279px)" });
  const under1024 = useMediaQuery({ query: "(max-width: 1023px)" });
  const sliderSettings = {
    slidesToShow: under1280 ? (under1024 ? 1 : 2) : 3,
    slidesToScroll: under1280 ? (under1024 ? 1 : 2) : 3,
  };
  return (
    <TestimonialListStyled {...sliderSettings}>
      {items?.map((item) => (
        <TestimonialItem key={item.id} {...item} />
      ))}
    </TestimonialListStyled>
  );
};

export default TestimonialList;
