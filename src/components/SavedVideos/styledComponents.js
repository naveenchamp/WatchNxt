import styled from 'styled-components'

export const Viewcontent = styled.div`
  display: flex;
  min-height: calc(100vh - 64px);
`

export const Content = styled.div`
  flex: 1;
  padding: 24px;
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`

export const VideoCard = styled.li`
  margin-bottom: 20px;
`

export const Thumbnail = styled.img`
  width: 300px;
`

export const Title = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#000')};
`

export const ChannelName = styled.p`
  color: #64748b;
`

export const Views = styled.p`
  color: #64748b;
`

export const EmptyContainer = styled.div`
  text-align: center;
  margin-top: 80px;
`
