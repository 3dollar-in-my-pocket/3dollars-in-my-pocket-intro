import styled from '@emotion/styled'
import { figuresData } from '../data'
import FigureItem from './FigureItem'

const FigureListStyled = styled.div`
  display: flex;
  max-width: 647px;
  width: 100%;
  justify-content: space-around;
`

const FigureList = () => {
  return (
    <FigureListStyled className="figurelist_responsive">
      {figuresData.map((item) => (
        <FigureItem key={item.id} Icon={item.icon.src} {...item} />
      ))}
    </FigureListStyled>
  )
}

export default FigureList
