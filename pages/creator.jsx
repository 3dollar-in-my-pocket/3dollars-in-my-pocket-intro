import styled from '@emotion/styled'
import { TitleStyled } from '../App'
import CreatorList from '../components/CreatorList/CreatorList'
import Footer from '../components/Footer/Footer'

const Creator = () => {
  return (
    <CreatorStyled className="page">
      <TitleStyled>Creator</TitleStyled>
      <CreatorList />
      <Footer />
    </CreatorStyled>
  )
}

const CreatorStyled = styled.div``

export default Creator
