import { Link } from 'react-router-dom'
import * as S from './RegistrationPageStyles.js'
import { useState } from 'react'
import { registrationUsersApi } from '../../api.js'

export const RegistrationPage = () => {
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const checkAndRegistration = async () => {
    try {
      await registrationUsersApi({ username, email, password })
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }

  const handleRegister = () => {
    if (!username) {
      setError('Укажите имя пользователя')
    } else if (!email) {
      setError('Укажите адрес электронной почты')
    } else if (!password) {
      setError('Укажите пароль')
    } else if (password !== repeatPassword) {
      setError('Указанные пароли не совпадают')
    } else if (password.length < 8) {
      setError('Пароль должен быть не менее 8-ми символов')
    } else {
      checkAndRegistration()
    }
  }

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/registration">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>

        <S.Inputs>
          <S.ModalInput
            type="text"
            name="username"
            placeholder="Имя пользователя"
            value={username}
            onChange={(event) => {
              setUserName(event.target.value)
            }}
          />
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
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value)
            }}
          />
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton onClick={handleRegister}>
            Зарегистрироваться
          </S.PrimaryButton>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
