import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/Theme'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  Viewcontent,
  Content,
  Headroll,
  VideosContainer,
  VideoCard,
  Thumbnail,
  Title,
  Views,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const url = 'https://apis.ccbp.in/videos/gaming'

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))

      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideos = isDark => {
    const {gamingVideos} = this.state

    return (
      <VideosContainer>
        {gamingVideos.map(video => (
          <Link key={video.id} to={`/videos/${video.id}`}>
            <VideoCard isDark={isDark}>
              <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
              <Title isDark={isDark}>{video.title}</Title>
              <Views>{video.viewCount} Watching Worldwide</Views>
            </VideoCard>
          </Link>
        ))}
      </VideosContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="var(--c-3b82f6)" height="50" width="50" />
    </LoaderContainer>
  )

  renderContent = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoader()

      case apiStatusConstants.success:
        return this.renderVideos(isDark)

      case apiStatusConstants.failure:
        return <p>Something went wrong</p>

      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />

              <Viewcontent data-testid="gaming" isDark={isDark}>
                <Navbar />

                <Content isDark={isDark}>
                  <Headroll isDark={isDark}>
                    <h1>Gaming</h1>
                  </Headroll>

                  {this.renderContent(isDark)}
                </Content>
              </Viewcontent>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
