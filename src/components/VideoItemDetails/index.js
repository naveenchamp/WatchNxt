import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/Theme'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  Viewcontent,
  Content,
  VideoPlayerContainer,
  Title,
  VideoMetaContainer,
  ViewsAndDate,
  ButtonsContainer,
  ActionButton,
  Separator,
  ChannelSection,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  Subscribers,
  Description,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: null,
    apiStatus: apiStatusConstants.loading,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const {match} = this.props
    const {id} = match.params

    const url = `https://apis.ccbp.in/videos/${id}`

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
      const video = data.video_details

      const updatedData = {
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onClickSave = (isSaved, addSavedVideo, removeSavedVideo) => {
    const {videoDetails} = this.state

    if (isSaved) {
      removeSavedVideo(videoDetails.id)
    } else {
      addSavedVideo(videoDetails)
    }
  }

  renderLoader = () => (
    <div
      data-testid="loader"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailure = isDark => (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <img
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <h1 style={{margin: '0 0 8px'}}>Oops! Something Went Wrong</h1>
      <p style={{margin: '0 0 16px'}}>
        We are having some trouble to complete your request.
      </p>
      <button type="button" onClick={this.getVideoDetails}>
        Retry
      </button>
    </div>
  )

  renderVideo = (isDark, value) => {
    const {isLiked, isDisliked, videoDetails} = this.state
    const {savedVideosList, addSavedVideo, removeSavedVideo} = value

    if (videoDetails === null || !videoDetails.channel) {
      return null
    }

    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoDetails

    const isSaved = savedVideosList.some(video => video.id === videoDetails.id)

    return (
      <VideoPlayerContainer isDark={isDark}>
        <ReactPlayer url={videoUrl} controls width="100%" />

        <Title isDark={isDark}>{title}</Title>

        <VideoMetaContainer>
          <ViewsAndDate>
            {viewCount} views - {publishedAt}
          </ViewsAndDate>

          <ButtonsContainer>
            <ActionButton
              type="button"
              active={isLiked}
              onClick={this.onClickLike}
            >
              Like
            </ActionButton>
            <ActionButton
              type="button"
              active={isDisliked}
              onClick={this.onClickDislike}
            >
              Dislike
            </ActionButton>
            <ActionButton
              type="button"
              active={isSaved}
              onClick={() =>
                this.onClickSave(isSaved, addSavedVideo, removeSavedVideo)
              }
            >
              {isSaved ? 'Saved' : 'Save'}
            </ActionButton>
          </ButtonsContainer>
        </VideoMetaContainer>

        <Separator />

        <ChannelSection>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />

          <ChannelDetails>
            <ChannelName isDark={isDark}>{channel.name}</ChannelName>

            <Subscribers>{channel.subscriberCount} subscribers</Subscribers>

            <Description isDark={isDark}>{description}</Description>
          </ChannelDetails>
        </ChannelSection>
      </VideoPlayerContainer>
    )
  }

  renderContent = (isDark, value) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderVideo(isDark, value)
      case apiStatusConstants.failure:
        return this.renderFailure(isDark)
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

              <Viewcontent data-testid="videoItemDetails" isDark={isDark}>
                <Navbar />

                <Content isDark={isDark}>
                  {this.renderContent(isDark, value)}
                </Content>
              </Viewcontent>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
