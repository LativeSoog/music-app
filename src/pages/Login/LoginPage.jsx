import { Link, useNavigate } from 'react-router-dom'
import * as S from './LoginPageStyles.js'
import { useState } from 'react'
import { authUserApi, getUserAccessToken } from '../../api.js'

export function LoginPage({ setUser }) {
  const [error, setError] = useState(null)
  const [isLoginProcess, setIsLoginProcess] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const checkAndLogin = async () => {
    try {
      setIsLoginProcess(true)
      let userLoginInfo = await authUserApi({ email, password })
      userLoginInfo.token = await getUserAccessToken({ email, password })
      localStorage.setItem('user', JSON.stringify(userLoginInfo))
      setUser(userLoginInfo)
      setIsLoginProcess(false)
      navigate('/')
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoginProcess(false)
    }
  }

  const handleLogin = () => {
    if (!email) {
      setError('Укажите эл. почту')
      return
    } else if (!password) {
      setError('Введите пароль')
      return
    } else {
      checkAndLogin()
    }
  }

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_black.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
            {isLoginProcess ? 'Выполняется вход...' : 'Войти'}
          </S.PrimaryButton>
          <Link to="/registration">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
