import React from 'react'

const ThemeContext = React.createContext({
  onToggleThemeButton: () => {},
  darkTheme: false,

  onClickSaveButton: () => {},
  savedVideos: [],

  onClickLikeButton: () => {},
  likedVideos: [],

  onClickDislikeButton: () => {},
  dislikedVideos: [],
})

export default ThemeContext
