import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginMainContainer,
  LoginContent,
  FormContainer,
  WebsiteLogo,
  LabelAndInputContainer,
  LabelTag,
  InputTag,
  CheckboxAndNoteContainer,
  Checkbox,
  CheckboxNote,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  handleUserInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  handlePassInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  handleShowPass = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  responseSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 2})

    history.replace('/')
  }

  responseFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  handleFormSubmission = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.responseSuccess(data.jwt_token)
      console.log('logedIn Seccessfully')
    } else {
      this.responseFailure(data.error_msg)
    }
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    const visiblePass = showPassword ? 'text' : 'password'
    return (
      <LoginMainContainer>
        <LoginContent>
          <FormContainer onSubmit={this.handleFormSubmission}>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <LabelAndInputContainer>
              <LabelTag htmlFor="username">USERNAME</LabelTag>
              <InputTag
                type="text"
                id="username"
                onChange={this.handleUserInput}
                value={usernameInput}
                placeholder="Username..."
              />
            </LabelAndInputContainer>
            <LabelAndInputContainer>
              <LabelTag htmlFor="password">PASSWORD</LabelTag>
              <InputTag
                type={visiblePass}
                id="password"
                onChange={this.handlePassInput}
                value={passwordInput}
                placeholder="Password..."
              />
            </LabelAndInputContainer>
            <CheckboxAndNoteContainer>
              <Checkbox
                type="checkbox"
                onClick={this.handleShowPass}
                id="checkbox"
              />
              <CheckboxNote htmlFor="checkbox">Show Password</CheckboxNote>
            </CheckboxAndNoteContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginContent>
      </LoginMainContainer>
    )
  }
}
export default Login
