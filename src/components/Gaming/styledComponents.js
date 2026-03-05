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
export const Headroll = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#e2e8f0')};
  color: ${props => (props.isDark ? '#f8fafc' : '#231f20')};
  width: 100%;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
`

export const VideosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin-top: 22px;
`

export const VideoCard = styled.li`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border: 1px solid ${props => (props.isDark ? '#303030' : '#e2e8f0')};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
`

export const Title = styled.p`
  font-size: 15px;
  margin: 10px 12px 0;
  line-height: 1.35;
  color: ${props => (props.isDark ? '#f8fafc' : '#231f20')};
`

export const Views = styled.p`
  font-size: 13px;
  margin: 6px 12px 12px;
  color: #64748b;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
