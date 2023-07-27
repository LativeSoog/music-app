export function PlayLists({ link, urlImg, altImg }) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={link}>
        <img className="sidebar__img" src={urlImg} alt={altImg}></img>
      </a>
    </div>
  )
}

export function PlayListsLoading() {
  return <div className="sidebar__item_skeleton"></div>
}
