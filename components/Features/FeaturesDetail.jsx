import styled from '@emotion/styled'
import MockupDetailImg from '../../assets/images/img_mockup_detail.webp'
import FeatureDescription from './FeatureDescription'

const FeaturesDetailStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FeatureDescriptionList = styled.div`
  margin: 0 24px;
`

const FeaturesDetail = ({ data }) => {
  return (
    <FeaturesDetailStyled className="features_detail features_content">
      <picture>
        <source srcSet={MockupDetailImg} type="image/webp" />
        <img
          src="https://i.postimg.cc/rpQsPTM7/img-mockup-detail.png"
          alt="mockup detail page"
        />
      </picture>
      <FeatureDescriptionList className="features_responsive">
        {data.map((item) => (
          <FeatureDescription key={'detail' + item.id} {...item} />
        ))}
      </FeatureDescriptionList>
    </FeaturesDetailStyled>
  )
}

export default FeaturesDetail
