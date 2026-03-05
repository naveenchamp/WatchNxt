import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 64px;
  padding: 0 24px;
  background-color: ${({isDark}) => (isDark ? '#181818' : '#ffffff')};
  border-bottom: 1px solid ${({isDark}) => (isDark ? '#313131' : '#e2e8f0')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`

export const Logo = styled.img`
  width: 130px;
  cursor: pointer;
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`

export const ThemeButton = styled.button`
  background: ${({isDark}) => (isDark ? '#272727' : '#f1f5f9')};
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.06);
  }
`

export const DesktopOnly = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 767px) {
    display: none;
  }
`

export const MobileOnly = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`

export const ProfileImage = styled.img`
  width: 34px;
  border-radius: 50%;
`

export const LogoutButton = styled.button`
  padding: 7px 16px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid ${({isDark}) => (isDark ? '#ffffff' : '#3b82f6')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#3b82f6')};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({isDark}) =>
      isDark ? 'rgba(255,255,255,0.1)' : '#eff6ff'};
  }
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
`

export const ModalContainer = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 10px;
  width: 320px;
  text-align: center;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.24);
`

export const ModalDesc = styled.p`
  font-size: 16px;
  color: #1e293b;
  margin-bottom: 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`

export const CloseButton = styled.button`
  min-width: 88px;
  padding: 8px 14px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid #64748b;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  min-width: 88px;
  padding: 8px 14px;
  border-radius: 6px;
  background: #3b82f6;
  color: #ffffff;
  border: none;
  cursor: pointer;
`

export const MobileMenu = styled.div`
  position: fixed;
  top: 64px;
  right: 0;
  width: 220px;
  height: calc(100vh - 64px);
  background-color: ${({isDark}) => (isDark ? '#181818' : '#ffffff')};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
