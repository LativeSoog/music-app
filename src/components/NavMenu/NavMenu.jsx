import { useState } from 'react'
import * as S from './style.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentPlayList,
  setIsCompilation,
} from '../../store/actions/creators/audioplayer.js'
import { audioPlayerSetIsCompilation } from '../../store/selectors/audioplayer.js'

export function NavMenu() {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const toggleButton = () => setVisible(!visible)
  const isCompilation = useSelector(audioPlayerSetIsCompilation)

  const btnLogout = () => {
    window.localStorage.removeItem('user')
  }

  const changeFavoritePlayList = () => {
    dispatch(selectCurrentPlayList('favorite'))
    if (isCompilation) {
      dispatch(setIsCompilation(false))
    }
  }

  const changeDefaultPlayList = () => {
    dispatch(selectCurrentPlayList(false))
    if (isCompilation) {
      dispatch(setIsCompilation(false))
    }
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo"></S.LogoImage>
      </S.NavLogo>
      <S.NavBurger onClick={toggleButton}>
        <NavBurger />
        <NavBurger />
        <NavBurger />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <NavMenuItem
              link="/"
              text="Главное"
              function={changeDefaultPlayList}
            />
            <NavMenuItem
              link="/favorites"
              text="Мой плейлист"
              function={changeFavoritePlayList}
            />
            <NavMenuItem link="/login" text="Выйти" function={btnLogout} />
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
      <S.MenuLink onClick={props.function} to={props.link}>
        {props.text}
      </S.MenuLink>
    </S.MenuItem>
  )
}
