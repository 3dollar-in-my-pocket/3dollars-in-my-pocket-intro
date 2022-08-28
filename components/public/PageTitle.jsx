import styled from '@emotion/styled'

const Title = styled.h1`
  color: #f3a2a9;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 3.8rem;
  line-height: 4.6rem;
  text-align: center;
  letter-spacing: -0.02em;
  margin: 104px 0 96px 0;
`

const PageTitle = ({ name }) => {
  return <Title>{name}</Title>
}

export default PageTitle
