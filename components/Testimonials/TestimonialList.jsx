import styled from '@emotion/styled'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
// import LeftArrow from '../../assets/icons/icon_chevron_left.svg'
// import RightArrow from '../../assets/icons/icon_chevron_right.svg'
import TestimonialItem from './TestimonialItem'

const TestimonialListStyled = styled(Slider)`
  width: 85%;
  max-width: 1089px;
  margin: 0 auto;

  .slick-prev:before {
    position: absolute;
    left: -2.5px;
  }

  .slick-next:before {
    position: absolute;
    left: -22.5px;
  }
`

const TestimonialList = ({ items }) => {
  const under1280 = useMediaQuery({ query: '(max-width: 1279px)' })
  const under1024 = useMediaQuery({ query: '(max-width: 1023px)' })
  const under425 = useMediaQuery({ query: '(max-width: 424px' })

  const sliderSettings = {
    slidesToShow: under1280 ? (under1024 ? 1 : 2) : 3,
    slidesToScroll: under1280 ? (under1024 ? 1 : 2) : 3,
    arrows: under425 ? false : true,
    dots: under425 ? true : false,
  }
  return (
    <TestimonialListStyled {...sliderSettings}>
      {items?.map((item) => (
        <TestimonialItem key={item.id} {...item} />
      ))}
    </TestimonialListStyled>
  )
}

export default TestimonialList
