import styled from 'styled-components'

export const Viewcontent = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  background-color: ${props =>
    props.isDark ? 'var(--c-0f0f0f)' : 'var(--c-f9f9f9)'};
  overflow: hidden;
`

export const Content = styled.div`
  width: calc(100% - 260px);
  margin-left: 260px;
  padding: 24px 28px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  min-width: 0;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    height: auto;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  max-width: 980px;
  background-color: ${props =>
    props.isDark ? 'var(--c-181818)' : 'var(--c-ffffff)'};
  border-radius: 12px;
  border: 1px solid
    ${props => (props.isDark ? 'var(--c-313131)' : 'var(--c-e2e8f0)')};
  padding: 16px;
`

export const Title = styled.p`
  font-size: 20px;
  margin-top: 15px;
  color: ${props => (props.isDark ? 'var(--c-f9f9f9)' : 'var(--c-1e293b)')};
`

export const VideoMetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

export const ViewsAndDate = styled.p`
  font-size: 14px;
  color: var(--c-64748b);
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0;
  color: ${props => (props.active ? '#2563eb' : 'var(--c-64748b)')};
`

export const Separator = styled.hr`
  border: 1px solid var(--c-e2e8f0);
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
  color: ${props => (props.isDark ? 'var(--c-f9f9f9)' : 'var(--c-1e293b)')};
`

export const Subscribers = styled.p`
  font-size: 13px;
  color: var(--c-64748b);
  margin: 4px 0;
`

export const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.6;
  color: ${props => (props.isDark ? 'var(--c-d7dfe9)' : 'var(--c-475569)')};
`
