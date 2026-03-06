import styled from 'styled-components'

export const Viewcontent = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  background-color: ${props =>
    props.isDark ? 'var(--c-181818)' : 'var(--c-f9f9f9)'};
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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid
    ${props => (props.isDark ? 'var(--c-313131)' : 'var(--c-d7dfe9)')};
  width: min(430px, 100%);
  background-color: ${props =>
    props.isDark ? 'var(--c-0f0f0f)' : 'var(--c-ffffff)'};
  border-radius: 8px;
  overflow: hidden;
`

export const Inputsearch = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 12px;
  font-size: 15px;
  background: transparent;
  color: ${props => (props.isDark ? 'var(--c-ffffff)' : 'var(--c-000000)')};

  &::placeholder {
    color: var(--c-7e858e);
  }
`

export const SearchIcon = styled.button`
  background-color: ${props =>
    props.isDark ? 'var(--c-313131)' : 'var(--c-f1f5f9)'};
  border: none;
  border-left: 1px solid
    ${props => (props.isDark ? 'var(--c-313131)' : 'var(--c-d7dfe9)')};
  color: ${props => (props.isDark ? 'var(--c-ffffff)' : 'var(--c-000000)')};
  padding: 8px 12px;
  cursor: pointer;
`

export const VideosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
  list-style-type: none;
  padding: 0;
  margin-top: 24px;
`

export const VideoCard = styled.li`
  background-color: ${props =>
    props.isDark ? 'var(--c-212121)' : 'var(--c-ffffff)'};
  border-radius: 12px;
  border: 1px solid
    ${props => (props.isDark ? 'var(--c-313131)' : 'var(--c-e2e8f0)')};
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
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

export const VideoDetails = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  line-height: 1.4;
  margin: 0;
  color: ${props => (props.isDark ? 'var(--c-f1f5f9)' : 'var(--c-0f0f0f)')};
`

export const VideoMeta = styled.p`
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--c-64748b);
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 24px 24px 20px;
  margin-bottom: 18px;
  position: relative;
  max-width: 920px;

  img {
    width: 150px;
    margin-bottom: 12px;
  }

  p {
    margin: 0 0 14px;
    max-width: 340px;
    color: var(--c-1e293b);
    font-size: 15px;
    line-height: 1.45;
  }

  button {
    border: 1px solid var(--c-1e293b);
    background: transparent;
    color: var(--c-1e293b);
    padding: 8px 14px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  button:last-child {
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    padding: 0;
    font-size: 16px;
    line-height: 1;
  }
`

export const NoVideosContainer = styled.div`
  min-height: 56vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;

  img {
    width: min(320px, 88%);
    margin-bottom: 20px;
  }

  h1 {
    margin: 0 0 8px;
    font-size: 28px;
    color: ${props => (props.isDark ? 'var(--c-f9f9f9)' : 'var(--c-1e293b)')};
  }

  p {
    margin: 0 0 16px;
    color: ${props => (props.isDark ? 'var(--c-cbd5e1)' : 'var(--c-64748b)')};
  }

  button {
    border: none;
    background-color: var(--c-3b82f6);
    color: var(--c-ffffff);
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
  }
`

export const FailureContainer = styled.div`
  min-height: 56vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;

  img {
    width: min(340px, 90%);
    margin-bottom: 20px;
  }

  h1 {
    margin: 0 0 8px;
    font-size: 28px;
    color: ${props => (props.isDark ? 'var(--c-f9f9f9)' : 'var(--c-1e293b)')};
  }

  p {
    margin: 0 0 16px;
    color: ${props => (props.isDark ? 'var(--c-cbd5e1)' : 'var(--c-64748b)')};
  }

  button {
    border: none;
    background-color: var(--c-3b82f6);
    color: var(--c-ffffff);
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
  }
`
