import { useState } from 'react'
import * as S from '../NavMenu/style.jsx'

export function NavMenu(props) {
  const [visible, setVisible] = useState(false)
  const toggleButton = () => setVisible(!visible)

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
            <NavMenuItem link="http://" text="Главное" />
            <NavMenuItem link="http://" text="Мой плейлист" />
            <NavMenuItem link="http://" text="Войти" />
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
      <S.MenuLink href={props.link}>{props.text}</S.MenuLink>
    </S.MenuItem>
  )
}
