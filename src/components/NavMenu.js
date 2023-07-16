export function NavMenu(props) {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        <NavMenuItem link="http://" text="Главное" />
        <NavMenuItem link="http://" text="Мой плейлист" />
        <NavMenuItem link="http://" text="Войти" />
      </ul>
    </div>
  )
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
