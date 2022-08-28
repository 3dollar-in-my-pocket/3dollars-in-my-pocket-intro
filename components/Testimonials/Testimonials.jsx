import styled from '@emotion/styled'
import TestimonialList from './TestimonialList'
import { reviewsData } from '../data'

const TestimonialsStyled = styled.div`
  background: #f3a2a9;
  height: 436px;
  display: flex;
  align-items: center;

  .slick-dots {
    display: block;
    position: relative;
    top: 25px;
  }

  .slick-dots li button:before {
    color: #fff;
  }
`

const Testimonials = () => {
  return (
    <TestimonialsStyled>
      <TestimonialList items={reviewsData} />
    </TestimonialsStyled>
  )
}

export default Testimonials
