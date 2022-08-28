import styled from '@emotion/styled'
import { newsData } from '../data'
import NewsItem from './NewsItem'

const NewsFeedStyled = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
`

const Content = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 56px;
  justify-content: space-evenly;
  margin: 0 auto 257px;
  width: 90vw;
  max-width: 1108px;
`

const NewsFeed = () => {
  return (
    <NewsFeedStyled>
      <Content className="news_responsive">
        {newsData.map((item) => (
          <NewsItem key={'news' + item.id} {...item} />
        ))}
      </Content>
    </NewsFeedStyled>
  )
}

export default NewsFeed
