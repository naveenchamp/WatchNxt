import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
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

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
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
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
      }

      this.setState({videoDetails: updatedData})
    }
  }

  renderVideo = isDark => {
    const {videoDetails} = this.state

    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoDetails

    if (!channel) return null

    return (
      <VideoPlayerContainer>
        <ReactPlayer url={videoUrl} controls width="100%" />

        <Title isDark={isDark}>{title}</Title>

        <VideoMetaContainer>
          <ViewsAndDate>
            {viewCount} views • {publishedAt}
          </ViewsAndDate>

          <ButtonsContainer>
            <ActionButton>👍 Like</ActionButton>
            <ActionButton>👎 Dislike</ActionButton>
            <ActionButton>💾 Save</ActionButton>
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

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />

              <Viewcontent isDark={isDark}>
                <Navbar />

                <Content isDark={isDark}>{this.renderVideo(isDark)}</Content>
              </Viewcontent>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
