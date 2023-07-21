export function PlayLists(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={props.link}>
        <img
          className="sidebar__img"
          src={props.urlImg}
          alt={props.altImg}
        ></img>
      </a>
    </div>
  )
}
