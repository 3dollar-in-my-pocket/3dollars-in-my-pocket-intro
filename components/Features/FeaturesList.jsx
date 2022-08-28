import styled from '@emotion/styled'
import MockupListImg from '../../assets/images/img_mockup_list.webp'
import FeatureDescription from './FeatureDescription'

const FeaturesListStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FeatureDescriptionList = styled.div`
  margin: 0 24px;
`

const FeaturesList = ({ data }) => {
  return (
    <FeaturesListStyled className="features_content">
      <picture>
        <source srcSet={MockupListImg} type="image/webp" />
        <img
          src="https://i.postimg.cc/jdPzkD99/img-mockup-list.png"
          alt="mockup list page"
        />
      </picture>
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={'list' + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesListStyled>
  )
}

export default FeaturesList
