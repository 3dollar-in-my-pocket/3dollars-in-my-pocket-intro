import styled from "styled-components";
import Slider from "react-slick";
import LeftArrow from "../../assets/icons/icon_chevron_left.svg";
import RightArrow from "../../assets/icons/icon_chevron_right.svg";

const TestimonialsStyled = styled.div`
  background: #f3a2a9;
  height: 436px;
  display: flex;
  align-items: center;
`;

export const TestimonialItemStyled = styled.div`
  background: #fff;
  min-width: 272px;
  height: 268px;
  border-radius: 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0 35px;

  .testimonial_emoji {
    font-size: 6rem;
    margin-top: 42.5px;
  }

  .testimonial_desc {
    height: fit-content;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.57;
    text-align: center;
    letter-spacing: -0.06em;
    color: #2e2e2e;
    margin: 14.5px 0 22px 0;
  }

  .testimonial_nickname {
    font-family: Roboto;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.06em;
    color: #ee624c;
  }
`;

export const TestimonialListStyled = styled(Slider)`
  width: 85%;
  max-width: 1089px;
  margin: 0 auto;

  .slick-prev:before {
    content: url(${LeftArrow});
    position: absolute;
    left: -2.5px;
  }

  .slick-next:before {
    content: url(${RightArrow});
    position: absolute;
    left: -22.5px;
  }
`;

export default TestimonialsStyled;
