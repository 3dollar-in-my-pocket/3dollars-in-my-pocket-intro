import Footer from '../components/Footer/Footer'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import PageTitle from '../components/public/PageTitle'

const News = () => {
  return (
    <div className="page">
      <PageTitle name="News" />
      <NewsFeed />
      <Footer />
    </div>
  )
}

export default News
