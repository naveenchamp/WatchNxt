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

export const VideoPlayerContainer = styled.div`
  width: 100%;
  max-width: 900px;
`

export const Title = styled.p`
  font-size: 18px;
  margin-top: 15px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`

export const VideoMetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const ViewsAndDate = styled.p`
  font-size: 14px;
  color: #64748b;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const Separator = styled.hr`
  border: 1px solid #64748b;
  margin: 20px 0;
`

export const ChannelSection = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 15px;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 16px;
  margin: 0;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`

export const Subscribers = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 4px 0;
`

export const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: ${props => (props.isDark ? '#d7dfe9' : '#475569')};
`
