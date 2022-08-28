import styled from '@emotion/styled'
import CreatorList from '../components/CreatorList/CreatorList'
import Footer from '../components/Footer/Footer'
import PageTitle from '../components/public/PageTitle'

const Creator = () => {
  return (
    <CreatorStyled className="page">
      <PageTitle name="Creator" />
      <CreatorList />
      <Footer />
    </CreatorStyled>
  )
}

const CreatorStyled = styled.div``

export default Creator
