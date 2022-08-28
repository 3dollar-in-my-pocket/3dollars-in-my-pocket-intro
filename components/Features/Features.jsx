import { useState } from 'react'
import styled from '@emotion/styled'
import { featuresData } from '../data'
import FeaturesDetail from './FeaturesDetail'
import FeaturesList from './FeaturesList'
import FeaturesMain from './FeaturesMain'

const FeaturesStyled = styled.div`
  width: 100%;
  min-height: 1164px;
  max-height: 100%;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  .features_detail .feature_description {
    margin-bottom: 48px;
  }

  img,
  source {
    width: 364px;
    height: 669px;
    max-width: 60vw;
    object-fit: contain;
  }
`

const Title = styled.h3`
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 1.2;
  letter-spacing: -0.06em;

  span {
    color: #f3a2a9;
  }
`

const Description = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 24px 10px 40px;
  word-break: keep-all;
`

const TabMenu = styled.ul`
  display: flex;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 40px;
  margin-bottom: 58px;
  max-width: 95vw;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

const TabMenuItem = styled.li`
  width: 186px;
  color: ${({ type, current }) => (type === current ? '#ee624c' : '#fff')};
  border-bottom: 1px solid
    ${({ type, current }) => (type === current ? '#ee624c' : '#fff')};
`

const tab = {
  MAIN: <FeaturesMain data={featuresData.main} />,
  LIST: <FeaturesList data={featuresData.list} />,
  Detail: <FeaturesDetail data={featuresData.detail} />,
}

const Features = () => {
  const [type, setType] = useState('MAIN')

  const handleClick = (e) => {
    setType(e.target.innerText)
  }

  return (
    <FeaturesStyled>
      <Title>
        <span>가슴속 3천원</span>이<br /> 대체 무슨 어플인가요?
      </Title>
      <Description>
        가슴속 3천원은 길거리 음식 위치 찾기 어플입니다. <br />
        사용자 참여로 멋진 지도를 완성해보아요!
      </Description>
      <TabMenu>
        <TabMenuItem type="MAIN" current={type} onClick={handleClick}>
          MAIN
        </TabMenuItem>
        <TabMenuItem type="LIST" current={type} onClick={handleClick}>
          LIST
        </TabMenuItem>
        <TabMenuItem type="Detail" current={type} onClick={handleClick}>
          Detail
        </TabMenuItem>
      </TabMenu>
      {tab[type]}
    </FeaturesStyled>
  )
}

export default Features
