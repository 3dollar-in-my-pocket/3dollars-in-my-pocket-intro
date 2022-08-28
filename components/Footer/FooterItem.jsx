import styled from '@emotion/styled'

const FooterItemStyled = styled.div`
  margin-right: 66px;
  div {
    color: #f3a2a9;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 2.4rem;
    letter-spacing: -0.06em;
  }

  p {
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.8;
    letter-spacing: -0.04em;
  }

  a {
    color: #fff;
    text-decoration: underline;
  }
`

const FooterItem = ({ title, content }) => {
  return (
    <FooterItemStyled>
      <div>{title}</div>
      <p>{content}</p>
    </FooterItemStyled>
  )
}

export default FooterItem
