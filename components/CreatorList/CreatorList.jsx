import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled'
import { creatorData } from '../data'
import CreatorItem from './CreatorItem'

const CreatorListStyled = styled.div`
  max-width: 1120px;
  margin: 0 auto 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h2 {
    color: #f3a2a9;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: -0.04em;
  }
`

const Container = styled.div``

const Title = styled.div`
  display: flex;
  align-items: center;

  hr {
    width: 100%;
    background: #f3a2a9;
    border: none;
    height: 1px;
  }
`

const Group = styled.div`
  display: flex;
  margin: 0 -22px;
`

const CreatorList = () => {
  const under1280 = useMediaQuery({ query: '(max-width: 1279px)' })

  const arr = under1280
    ? ['Designer', 'Marketer', 'ANDROID', 'iOS', 'BACKEND']
    : Object.keys(creatorData)

  return (
    <CreatorListStyled className="creator_responsive">
      {arr.map((item) => (
        <Container key={`${item}_container`}>
          <Title>
            <h2>{item}</h2>
            <hr />
          </Title>
          <Group className="creator_group__responsive">
            {creatorData[item].map((creator) => (
              <CreatorItem key={creator.name_en} {...creator} />
            ))}
          </Group>
        </Container>
      ))}
    </CreatorListStyled>
  )
}

export default CreatorList
