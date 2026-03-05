import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 64px;
  padding: 0 24px;
  background-color: ${({isDark}) => (isDark ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
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
  width: 32px;
  border-radius: 50%;
`

export const LogoutButton = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid ${({isDark}) => (isDark ? '#ffffff' : '#3b82f6')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#3b82f6')};
  font-weight: 600;
  cursor: pointer;
`

export const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
`

export const ModalContainer = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`

export const ModalDesc = styled.p`
  font-size: 16px;
  color: #1e293b;
  margin-bottom: 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CloseButton = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  background: transparent;
  border: 1px solid #64748b;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  padding: 6px 14px;
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
