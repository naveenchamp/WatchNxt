import styled from 'styled-components'

export const Viewcontent = styled.div`
  display: flex;
  min-height: calc(100vh - 64px);
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const Content = styled.div`
  flex: 1;
  padding: 24px;
`

export const Headroll = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f5f9')};
  padding: 20px;
`

export const IconContainer = styled.div`
  background-color: #e2e8f0;
  padding: 15px;
  border-radius: 50%;
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`

export const VideoCard = styled.li`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 300px;
  margin-right: 15px;
`

export const VideoDetails = styled.div`
  display: flex;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

export const Title = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const Trendsin = styled.h1`
  font-size: 66px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const Views = styled.p`
  font-size: 14px;
  color: #64748b;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
