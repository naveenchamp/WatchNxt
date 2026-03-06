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
  background-color: ${props =>
    props.isDark ? 'var(--c-212121)' : 'var(--c-e2e8f0)'};
  color: ${props => (props.isDark ? 'var(--c-f8fafc)' : 'var(--c-231f20)')};
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
  background-color: ${props =>
    props.isDark ? 'var(--c-212121)' : 'var(--c-ffffff)'};
  border: 1px solid
    ${props => (props.isDark ? 'var(--c-313131)' : 'var(--c-e2e8f0)')};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--c-3b82f6);
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
  color: ${props => (props.isDark ? 'var(--c-f8fafc)' : 'var(--c-231f20)')};
`

export const Views = styled.p`
  font-size: 13px;
  margin: 6px 12px 12px;
  color: var(--c-64748b);
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
