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

export const Headroll = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${props =>
    props.isDark ? 'var(--c-181818)' : 'var(--c-f1f5f9)'};
  padding: 18px 22px;
  border-radius: 12px;
`

export const IconContainer = styled.div`
  background-color: var(--c-e2e8f0);
  padding: 12px;
  border-radius: 50%;
`

export const VideosContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const VideoCard = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px;
  background-color: ${props =>
    props.isDark ? 'var(--c-212121)' : 'var(--c-ffffff)'};
  border: 1px solid
    ${props => (props.isDark ? 'var(--c-313131)' : 'var(--c-e2e8f0)')};
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--c-3b82f6);
  }

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

export const VideoDetails = styled.div`
  display: flex;
  gap: 10px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

export const Title = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 1.4;
  color: ${props => (props.isDark ? 'var(--c-ffffff)' : 'var(--c-000000)')};
`
export const Trendsin = styled.h1`
  font-size: 28px;
  margin: 0;
  font-weight: bold;
  color: ${props => (props.isDark ? 'var(--c-ffffff)' : 'var(--c-000000)')};
`

export const Views = styled.p`
  font-size: 13px;
  margin: 6px 0 0;
  color: var(--c-64748b);
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
