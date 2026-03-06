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
  background-color: ${props =>
    props.isDark ? 'var(--c-212121)' : 'var(--c-ffffff)'};
  border: 1px solid
    ${props => (props.isDark ? 'var(--c-313131)' : 'var(--c-e2e8f0)')};
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
  color: ${props => (props.isDark ? 'var(--c-f9f9f9)' : 'var(--c-000000)')};
`

export const ChannelName = styled.p`
  margin: 8px 0 0;
  color: var(--c-64748b);
`

export const Views = styled.p`
  margin: 6px 0 0;
  color: var(--c-64748b);
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
    color: var(--c-1e293b);
  }

  p {
    margin: 0;
    color: var(--c-64748b);
  }
`
