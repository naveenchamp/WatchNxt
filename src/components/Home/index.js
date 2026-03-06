import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import ThemeContext from '../../context/Theme'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  Viewcontent,
  Content,
  SearchContainer,
  Banner,
  Inputsearch,
  SearchIcon,
  VideosContainer,
  VideoCard,
  Thumbnail,
  VideoDetails,
  ChannelLogo,
  VideoTitle,
  VideoMeta,
  LoaderContainer,
  NoVideosContainer,
  FailureContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    searchtext: '',
    videosList: [],
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const {searchtext} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchtext}`

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
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  closeBanner = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  onSearchVideo = event => {
    this.setState({searchtext: event.target.value})
  }

  onClickSearch = () => {
    this.getVideoDetails()
  }

  renderVideos = isDark => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return (
        <NoVideosContainer isDark={isDark}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <h1>No Search results found</h1>
          <p>Try different key words or remove search filter</p>
          <button onClick={this.getVideoDetails} type="button">
            Retry
          </button>
        </NoVideosContainer>
      )
    }

    return (
      <VideosContainer>
        {videosList.map(video => (
          <Link key={video.id} to={`/videos/${video.id}`}>
            <VideoCard isDark={isDark}>
              <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />

              <VideoDetails>
                <ChannelLogo
                  src={video.channel.profileImageUrl}
                  alt="channel logo"
                />

                <div>
                  <VideoTitle isDark={isDark}>{video.title}</VideoTitle>

                  <VideoMeta>{video.channel.name}</VideoMeta>
                  <VideoMeta>{video.viewCount}</VideoMeta>
                  <VideoMeta>{video.publishedAt}</VideoMeta>
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
      <Loader type="ThreeDots" color="var(--c-3b82f6)" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailure = isDark => (
    <FailureContainer isDark={isDark}>
      <img
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button onClick={this.getVideoDetails} type="button">
        Retry
      </button>
    </FailureContainer>
  )

  renderContent = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoader()

      case apiStatusConstants.success:
        return this.renderVideos(isDark)

      case apiStatusConstants.failure:
        return this.renderFailure(isDark)

      default:
        return null
    }
  }

  render() {
    const {searchtext, showBanner} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />

              <Viewcontent data-testid="home" isDark={isDark}>
                <Navbar />

                <Content isDark={isDark}>
                  {showBanner && (
                    <Banner data-testid="banner">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />

                      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>

                      <button type="button">GET IT NOW</button>

                      <button
                        data-testid="close"
                        type="button"
                        onClick={this.closeBanner}
                      >
                        X
                      </button>
                    </Banner>
                  )}
                  <SearchContainer isDark={isDark}>
                    <Inputsearch
                      type="search"
                      placeholder="Search"
                      value={searchtext}
                      onChange={this.onSearchVideo}
                      isDark={isDark}
                    />

                    <SearchIcon
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearch}
                      isDark={isDark}
                    >
                      <AiOutlineSearch />
                    </SearchIcon>
                  </SearchContainer>

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

export default Home
