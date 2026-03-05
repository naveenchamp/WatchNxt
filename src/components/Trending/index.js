import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import ThemeContext from '../../context/Theme'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  Viewcontent,
  Content,
  Headroll,
  IconContainer,
  VideosContainer,
  VideoCard,
  Thumbnail,
  VideoDetails,
  ChannelLogo,
  Title,
  Views,
  LoaderContainer,
  Trendsin,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const url = 'https://apis.ccbp.in/videos/trending'

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
        publishedAt: video.published_at,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))

      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideos = isDark => {
    const {trendingVideos} = this.state

    return (
      <VideosContainer>
        {trendingVideos.map(video => (
          <Link key={video.id} to={`/videos/${video.id}`}>
            <VideoCard isDark={isDark}>
              <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />

              <VideoDetails>
                <ChannelLogo
                  src={video.channel.profileImageUrl}
                  alt="channel logo"
                />

                <div>
                  <Title isDark={isDark}>{video.title}</Title>
                  <Views>{video.channel.name}</Views>
                  <Views>{video.viewCount}</Views>
                  <Views>{video.publishedAt}</Views>
                </div>
              </VideoDetails>
            </VideoCard>
          </Link>
        ))}
      </VideosContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
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

              <Viewcontent data-testid="trending" isDark={isDark}>
                <Navbar />

                <Content isDark={isDark}>
                  <Headroll isDark={isDark}>
                    <IconContainer>
                      <HiFire size={30} color="red" />
                    </IconContainer>
                    <Trendsin>Trending</Trendsin>
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

export default Trending
