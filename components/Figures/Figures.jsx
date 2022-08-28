import styled from '@emotion/styled'
import FigureList from './FigureList'

const FiguresStyled = styled.div`
  background: #2e2e2e;
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #fff;
    font-weight: 800;
    font-size: 3.2rem;
    ling-height: 1.5;
    text-align: center;
    letter-spacing: -0.06em;
    margin: 60px 0 44px 0;

    span {
      color: #f3a2a9;
    }
  }
`

const Figures = () => {
  return (
    <FiguresStyled className="figures_responsive">
      <h3>
        <span>집단지성</span>으로
        <br /> 만들어지는 가슴속 3천원
      </h3>
      <FigureList />
    </FiguresStyled>
  )
}

export default Figures
