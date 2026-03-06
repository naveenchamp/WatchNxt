import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from '../../context/Theme'
import {
  DivContainer,
  ListContainer,
  ListItems,
  SpanEl,
  Para,
  ImageLogo,
  Logos,
  Heading,
  BottomDetails,
} from './styledComponents'

class Navbar extends Component {
  render() {
    const {location} = this.props
    const {pathname} = location

    const isHomeActive = pathname === '/'
    const isTrendingActive = pathname === '/trending'
    const isGamingActive = pathname === '/gaming'
    const isSavedActive = pathname === '/saved-videos'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <DivContainer isDark={isDark}>
              <ListContainer isDark={isDark}>
                <Link to="/">
                  <ListItems active={isHomeActive} isDark={isDark}>
                    <span>
                      <HiHome size={20} />
                    </span>
                    <SpanEl>Home</SpanEl>
                  </ListItems>
                </Link>

                <Link to="/trending">
                  <ListItems active={isTrendingActive} isDark={isDark}>
                    <span>
                      <AiFillFire size={20} />
                    </span>
                    <SpanEl>Trending</SpanEl>
                  </ListItems>
                </Link>

                <Link to="/gaming">
                  <ListItems active={isGamingActive} isDark={isDark}>
                    <span>
                      <SiYoutubegaming size={20} />
                    </span>
                    <SpanEl>Gaming</SpanEl>
                  </ListItems>
                </Link>

                <Link to="/saved-videos">
                  <ListItems active={isSavedActive} isDark={isDark}>
                    <span>
                      <MdPlaylistAdd size={20} />
                    </span>
                    <SpanEl>Saved videos</SpanEl>
                  </ListItems>
                </Link>
              </ListContainer>
              <BottomDetails>
                <Heading isDark={isDark}>CONTACT US</Heading>
                <Logos>
                  <ImageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ImageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ImageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linkedin logo"
                  />
                </Logos>
                <Para isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </BottomDetails>
            </DivContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
