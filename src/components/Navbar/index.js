import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'
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
  state = {
    activeItem: 'HOME',
  }

  changeActive = value => {
    this.setState({activeItem: value})
  }

  render() {
    const {activeItem} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <DivContainer isDark={isDark}>
              <ListContainer isDark={isDark}>
                <Link to="/">
                  <ListItems
                    onClick={() => this.changeActive('HOME')}
                    active={activeItem === 'HOME'}
                    isDark={isDark}
                  >
                    <span>
                      <HiHome size={20} />
                    </span>
                    <SpanEl>Home</SpanEl>
                  </ListItems>
                </Link>

                <Link to="/trending">
                  <ListItems
                    onClick={() => this.changeActive('TRENDING')}
                    active={activeItem === 'TRENDING'}
                    isDark={isDark}
                  >
                    <span>
                      <AiFillFire size={20} />
                    </span>
                    <SpanEl>Trending</SpanEl>
                  </ListItems>
                </Link>

                <Link to="/gaming">
                  <ListItems
                    onClick={() => this.changeActive('GAMING')}
                    active={activeItem === 'GAMING'}
                    isDark={isDark}
                  >
                    <span>
                      <SiYoutubegaming size={20} />
                    </span>
                    <SpanEl>Gaming</SpanEl>
                  </ListItems>
                </Link>

                <Link to="/saved-videos">
                  <ListItems
                    onClick={() => this.changeActive('SAVED')}
                    active={activeItem === 'SAVED'}
                    isDark={isDark}
                  >
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
                  Enjoy! NOw to see your channels and recommendations!
                </Para>
              </BottomDetails>
            </DivContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
