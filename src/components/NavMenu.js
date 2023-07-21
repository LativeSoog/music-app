export function NavMenu(props) {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo"></img>
      </div>
      <div className="nav__burger burger">
        <NavBurger />
        <NavBurger />
        <NavBurger />
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <NavMenuItem link="http://" text="Главное" />
          <NavMenuItem link="http://" text="Мой плейлист" />
          <NavMenuItem link="http://" text="Войти" />
        </ul>
      </div>
    </nav>
  )
}

function NavBurger(props) {
  return <span className="burger__line">{props.text}</span>
}

function NavMenuItem(props) {
  return (
    <li className="menu__item">
      <a href={props.link} className="menu__link">
        {props.text}
      </a>
    </li>
  )
}
