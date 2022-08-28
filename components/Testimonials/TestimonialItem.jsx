import styled from '@emotion/styled'

const TestimonialItemStyled = styled.div`
  background: #fff;
  min-width: 272px;
  height: 268px;
  border-radius: 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 19px;
  margin: 0 35px;

  .testimonial_emoji {
    font-size: 6rem;
    margin-top: 42.5px;
  }

  .testimonial_desc {
    height: fit-content;
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
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.06em;
    color: #ee624c;
  }
`

const TestimonialItem = ({ emoji, desc, nickname }) => {
  return (
    <TestimonialItemStyled className="testimonial_item">
      <p className="testimonial_emoji">{emoji}</p>
      <p className="testimonial_desc">{desc}</p>
      <p className="testimonial_nickname">{nickname}</p>
    </TestimonialItemStyled>
  )
}

export default TestimonialItem
