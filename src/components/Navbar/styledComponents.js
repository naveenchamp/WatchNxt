import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 260px;
  min-height: calc(100vh - 64px);
  background-color: ${props =>
    props.isDark ? 'var(--c-231f20)' : 'var(--c-ffffff)'};
  border-right: 1px solid
    ${props => (props.isDark ? 'var(--c-313131)' : 'var(--c-e2e8f0)')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 20;

  @media (max-width: 767px) {
    position: static;
    top: auto;
    left: auto;
    bottom: auto;
    min-height: auto;
    overflow-y: visible;
    width: 100%;
    border-right: none;
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const ListItems = styled.li`
  display: flex;
  align-items: center;
  padding: 13px 25px;
  cursor: pointer;

  color: ${props => {
    if (props.active) return 'var(--c-ff0b37)'
    return props.isDark ? 'var(--c-f9f9f9)' : 'var(--c-64748b)'
  }};

  background-color: ${props => {
    if (props.active) {
      return props.isDark ? 'var(--c-383838)' : 'var(--c-e2e8f0)'
    }
    return 'transparent'
  }};

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props =>
      props.isDark ? 'var(--c-383838)' : 'var(--c-e2e8f0)'};
  }
`

export const SpanEl = styled.span`
  padding-left: 10px;
  font-size: 16px;
  font-weight: 600;
`

/* CONTACT SECTION */

export const BottomDetails = styled.div`
  padding: 22px 25px;
`

export const Heading = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => (props.isDark ? 'var(--c-f9f9f9)' : 'var(--c-000000)')};
`

export const Logos = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`

export const ImageLogo = styled.img`
  width: 28px;
  height: 28px;
`

export const Para = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  color: ${props => (props.isDark ? 'var(--c-d7dfe9)' : 'var(--c-475569)')};
`
