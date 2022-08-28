import styled from '@emotion/styled'
import { footerData } from '../data'
import FooterItem from './FooterItem'

const FooterStyled = styled.div`
  background: #4a4a4a;
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  margin-top: 50px;
  margin-left: 60px;
`

const Footer = () => {
  return (
    <FooterStyled className="footer_container__responsive">
      <Container className="footer_responsive">
        {footerData.map((data) => (
          <FooterItem key={data.id} title={data.title} content={data.content} />
        ))}
      </Container>
    </FooterStyled>
  )
}

export default Footer
