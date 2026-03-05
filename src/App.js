import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/Theme'

class App extends Component {
  state = {
    isDark: false,
    savedVideosList: [],
  }

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  addSavedVideo = video => {
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, video],
    }))
  }

  removeSavedVideo = id => {
    this.setState(prev => ({
      savedVideosList: prev.savedVideosList.filter(video => video.id !== id),
    }))
  }

  render() {
    const {isDark, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
          savedVideosList,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />

          <ProtectedRoute exact path="/" component={Home} />

          <ProtectedRoute exact path="/trending" component={Trending} />

          <ProtectedRoute exact path="/gaming" component={Gaming} />

          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />

          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />

          <Route path="/not-found" component={NotFound} />

          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
