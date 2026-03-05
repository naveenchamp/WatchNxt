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
  background-color: ${props => (props.isDark ? '#212121' : '#e2e8f0')};
  color: ${props => (props.isDark ? '#f8fafc' : '#231f20')};
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const VideosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  list-style-type: none;
  padding: 0;
`

export const VideoCard = styled.li`
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const Title = styled.p`
  font-size: 14px;
  margin-top: 8px;
  color: ${props => (props.isDark ? '#f8fafc' : '#231f20')};
`

export const Views = styled.p`
  font-size: 12px;
  color: #64748b;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
