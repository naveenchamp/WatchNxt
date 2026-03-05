import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  savedVideosList: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default ThemeContext
