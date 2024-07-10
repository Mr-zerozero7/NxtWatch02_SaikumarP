// import './App.css
import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/HomeRoute'
import Login from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    // savedVideos: [],
    // likedVideos: [],
    // dislikedVideos: [],
  }

  onClickThemeButton = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme} = this.state
    // savedVideos, likedVideos, dislikedVideos
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          onToggleThemeButton: this.onClickThemeButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
