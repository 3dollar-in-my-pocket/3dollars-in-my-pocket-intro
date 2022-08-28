import styled from '@emotion/styled'

const FeatureDescriptionStyled = styled.div`
  margin-bottom: 56px;
  h3 {
    width: fit-content;
    color: #fff;
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: -0.06em;
    padding: 10px 16px;
    background: #f3a2a9;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.06em;
    text-align: left;
    white-space: pre-line;
    word-break: keep-all;
  }
`

const FeatureDescription = ({ title, description }) => {
  return (
    <FeatureDescriptionStyled className="feature_description">
      <h3>{title}</h3>
      <p>{description}</p>
    </FeatureDescriptionStyled>
  )
}

export default FeatureDescription
