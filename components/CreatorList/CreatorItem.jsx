import styled from '@emotion/styled'

const CreatorItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 67px 22px 100px;
`

const Photo = styled.div`
  width: 246px;
  height: 246px;
  border-radius: 100%;
  background: #232323;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
  }
`

const Name = styled.div`
  text-align: center;
  letter-spacing: -0.04em;
`
const NameEN = styled.p`
  color: #f3a2a9;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.2;
  margin: 29px 0 8px;
`
const NameKO = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.5;
`

const CreatorItem = ({ photo, name_en, name_ko }) => {
  return (
    <CreatorItemStyled>
      <Photo>
        <img src={photo} alt="profile"></img>
      </Photo>
      <Name>
        <NameEN>{name_en}</NameEN>
        <NameKO>{name_ko}</NameKO>
      </Name>
    </CreatorItemStyled>
  )
}

export default CreatorItem
