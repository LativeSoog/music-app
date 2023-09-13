import { useState } from 'react'
import * as S from './style.js'

export function NavMenu({ setUser }) {
  const [visible, setVisible] = useState(false)
  const toggleButton = () => setVisible(!visible)

  const btnLogout = () => {
    window.localStorage.removeItem('user')
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo"></S.LogoImage>
      </S.NavLogo>
      <S.NavBurger onClick={toggleButton}>
        <NavBurger />
        <NavBurger />
        <NavBurger />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <NavMenuItem link="/" text="Главное" />
            <NavMenuItem link="/favorites" text="Мой плейлист" />
            <NavMenuItem
              link="/login"
              text="Выйти"
              onClick={() => {
                btnLogout
              }}
            />
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

function NavBurger(props) {
  return <S.BurgerLine>{props.text}</S.BurgerLine>
}

function NavMenuItem(props) {
  return (
    <S.MenuItem>
      <S.MenuLink to={props.link}>{props.text}</S.MenuLink>
    </S.MenuItem>
  )
}
