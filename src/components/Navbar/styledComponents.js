import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 25%;
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
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
  padding: 12px 25px;
  cursor: pointer;

  color: ${props => {
    if (props.active) return '#ff0b37'
    return props.isDark ? '#f9f9f9' : '#64748b'
  }};

  background-color: ${props => {
    if (props.active) {
      return props.isDark ? '#383838' : '#e2e8f0'
    }
    return 'transparent'
  }};

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.isDark ? '#383838' : '#e2e8f0')};
  }
`

export const SpanEl = styled.span`
  padding-left: 10px;
  font-size: 16px;
  font-weight: 500;
`

/* CONTACT SECTION */

export const BottomDetails = styled.div`
  padding: 20px 25px;
`

export const Heading = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#000000')};
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
  color: ${props => (props.isDark ? '#d7dfe9' : '#475569')};
`
