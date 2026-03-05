import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginFormContainer,
  Logo,
  Label,
  Input,
  CheckboxContainer,
  Button,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
    })

    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      showPassword,
    } = this.state

    return (
      <LoginContainer>
        <LoginFormContainer onSubmit={this.submitForm}>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />

          <Label htmlFor="username">USERNAME</Label>
          <Input
            id="username"
            value={username}
            onChange={this.onChangeUsername}
          />

          <Label htmlFor="password">PASSWORD</Label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={this.onChangePassword}
          />

          <CheckboxContainer>
            <input type="checkbox" onChange={this.toggleShowPassword} />
            <span>Show Password</span>
          </CheckboxContainer>

          <Button type="submit">Login</Button>

          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
