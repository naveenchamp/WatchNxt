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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.isDark ? '#313131' : '#d7dfe9')};
  width: 350px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  border-radius: 4px;
`

export const Inputsearch = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  background: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const SearchIcon = styled.button`
  background-color: ${props => (props.isDark ? '#313131' : '#f1f5f9')};
  border: none;
  border-left: 1px solid ${props => (props.isDark ? '#313131' : '#d7dfe9')};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  padding: 8px 12px;
  cursor: pointer;
`

export const VideosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`

export const VideoCard = styled.li`
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const VideoDetails = styled.div`
  display: flex;
  margin-top: 10px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${props => (props.isDark ? '#f1f5f9' : ' #0f0f0f')};
`

export const VideoMeta = styled.p`
  font-size: 12px;
  color: #64748b;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export const Banner = styled.div``

export const NoVideosContainer = styled.div``

export const FailureContainer = styled.div``
