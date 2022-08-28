import styled from '@emotion/styled'

export const NewsItemStyled = styled.a`
  cursor: pointer;
  width: 332px;
  height: 304px;
  background: #2e2e2e;
  border-radius: 20px;
  margin-bottom: 72px;
`

const Thumbnail = styled.img``

const Box = styled.div`
  height: 124px;
  box-sizing: border-box;
  padding: 8px 16px 16px;
  position: relative;
`
const Title = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.44;
  letter-spacing: -0.06em;
  height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Author = styled.div`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: -0.06rem;
  position: absolute;
  bottom: 16px;
`

const NewsItem = ({ thumbnail, title, channel, date, link }) => {
  return (
    <NewsItemStyled href={link} target="_blank">
      <Thumbnail src={thumbnail} />
      <Box>
        <Title>{title}</Title>
        <Author>
          {channel} ∙ {date}
        </Author>
      </Box>
    </NewsItemStyled>
  )
}

export default NewsItem
