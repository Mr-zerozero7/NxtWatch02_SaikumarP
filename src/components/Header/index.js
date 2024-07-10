import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import {
  NavContainer,
  WebsiteLogo,
  UtilityContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const logoutAction = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme, onToggleThemeButton} = value
        const iconColor = darkTheme ? '#ffffff' : '#000000'
        const websiteThemeLogo = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <NavContainer dark={darkTheme}>
            <WebsiteLogo src={websiteThemeLogo} alt="website logo" />
            <UtilityContainer>
              <ThemeButton type="button" onClick={onToggleThemeButton}>
                {darkTheme ? (
                  <FiSun color={iconColor} />
                ) : (
                  <FaMoon color={iconColor} />
                )}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <LogoutButton type="button" onClick={logoutAction}>
                Logout
              </LogoutButton>
            </UtilityContainer>
          </NavContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
