import {Component} from 'react'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiMenu, FiX, FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import ThemeContext from '../../context/Theme'

import {
  NavBar,
  Logo,
  RightSection,
  ThemeButton,
  DesktopOnly,
  MobileOnly,
  ProfileImage,
  LogoutButton,
  IconButton,
  MobileMenu,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
} from './styledComponents'

class Header extends Component {
  state = {
    isMenuOpen: false,
  }

  toggleMenu = () => {
    this.setState(prev => ({isMenuOpen: !prev.isMenuOpen}))
  }

  onConfirmLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {isMenuOpen} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, toggleTheme} = value

          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <>
              <NavBar isDark={isDark}>
                <Link to="/">
                  <Logo src={logoUrl} alt="website logo" />
                </Link>

                <RightSection>
                  <ThemeButton
                    type="button"
                    onClick={toggleTheme}
                    isDark={isDark}
                    data-testid="theme"
                  >
                    {isDark ? <BsBrightnessHigh /> : <BsMoon />}
                  </ThemeButton>

                  {/* Desktop */}
                  <DesktopOnly>
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                    <Popup
                      modal
                      className="popup-content"
                      trigger={
                        <LogoutButton type="button" isDark={isDark}>
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <ModalContainer>
                          <ModalDesc>
                            Are you sure, you want to logout
                          </ModalDesc>

                          <ButtonsContainer>
                            <CloseButton type="button" onClick={close}>
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={this.onConfirmLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </ButtonsContainer>
                        </ModalContainer>
                      )}
                    </Popup>
                  </DesktopOnly>

                  {/* Mobile */}
                  <MobileOnly>
                    <IconButton onClick={this.toggleMenu} isDark={isDark}>
                      {isMenuOpen ? <FiX /> : <FiMenu />}
                    </IconButton>
                  </MobileOnly>
                </RightSection>
              </NavBar>

              {isMenuOpen && (
                <MobileMenu isDark={isDark}>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <IconButton onClick={this.onConfirmLogout} isDark={isDark}>
                    <FiLogOut style={{marginRight: 8}} />
                    Logout
                  </IconButton>
                </MobileMenu>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
