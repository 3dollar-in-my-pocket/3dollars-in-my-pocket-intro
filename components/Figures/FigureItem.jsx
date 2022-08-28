import styled from '@emotion/styled'

const FigureItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  div {
    font-weight: 800;
    font-size: 3.8rem;
    line-height: 4.6rem;
    text-align: center;
    letter-spacing: -0.06em;
    margin-top: 12px;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-align: center;
    letter-spacing: -0.04em;
  }
`

const FigureItem = ({ icon, figure, description }) => {
  return (
    <FigureItemStyled>
      <img src={icon.src} alt={icon.sort} />
      <div>{figure}</div>
      <p>{description}</p>
    </FigureItemStyled>
  )
}

export default FigureItem
