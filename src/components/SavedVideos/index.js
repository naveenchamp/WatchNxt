import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/Theme'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  Viewcontent,
  Content,
  VideosContainer,
  VideoCard,
  Thumbnail,
  Title,
  ChannelName,
  Views,
  EmptyContainer,
} from './styledComponents'

class Savedvideos extends Component {
  renderVideos = (savedVideos, isDark) => (
    <VideosContainer>
      {savedVideos.map(video => (
        <Link key={video.id} to={`/videos/${video.id}`}>
          <VideoCard>
            <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />

            <Title isDark={isDark}>{video.title}</Title>

            <ChannelName>{video.channel.name}</ChannelName>

            <Views>
              {video.viewCount} views • {video.publishedAt}
            </Views>
          </VideoCard>
        </Link>
      ))}
    </VideosContainer>
  )

  renderEmptyView = () => (
    <EmptyContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />

      <h1>No saved videos found</h1>

      <p>You can save your videos while watching them</p>
    </EmptyContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, savedVideosList = []} = value

          const isEmpty = savedVideosList.length === 0

          return (
            <>
              <Header />

              <Viewcontent isDark={isDark}>
                <Navbar />

                <Content>
                  <h1>Saved Videos</h1>

                  {isEmpty
                    ? this.renderEmptyView()
                    : this.renderVideos(savedVideosList, isDark)}
                </Content>
              </Viewcontent>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Savedvideos
