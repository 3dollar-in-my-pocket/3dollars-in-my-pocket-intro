import styled from '@emotion/styled'

const DownloadButtonStyled = styled.a`
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 56px;
  background: #ee624c;
  border-radius: 62px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 32px;
  letter-spacing: -0.06em;
  color: #ffffff;
  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`

const DownloadButton = ({ sort, description, icon, link }) => {
  return (
    <DownloadButtonStyled
      href={link}
      target="_blank"
      className="download_button"
    >
      <img src={icon} alt={description} />
      <span>for {sort}</span>
    </DownloadButtonStyled>
  )
}

export default DownloadButton
