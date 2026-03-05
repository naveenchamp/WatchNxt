import styled from 'styled-components'

export const Viewcontent = styled.div`
  display: flex;
  min-height: calc(100vh - 64px);
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const Content = styled.div`
  flex: 1;
  padding: 24px 28px;
  overflow-y: auto;
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const VideoCard = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border: 1px solid ${props => (props.isDark ? '#303030' : '#e2e8f0')};
  border-radius: 12px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const Thumbnail = styled.img`
  width: 320px;
  max-width: 100%;
  border-radius: 10px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

export const Title = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${props => (props.isDark ? '#f9f9f9' : '#000')};
`

export const ChannelName = styled.p`
  margin: 8px 0 0;
  color: #64748b;
`

export const Views = styled.p`
  margin: 6px 0 0;
  color: #64748b;
`

export const EmptyContainer = styled.div`
  text-align: center;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  img {
    width: min(360px, 90%);
    margin-bottom: 18px;
  }

  h1 {
    margin: 0 0 8px;
    color: #1e293b;
  }

  p {
    margin: 0;
    color: #64748b;
  }
`
