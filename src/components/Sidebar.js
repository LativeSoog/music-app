import { PlayLists } from './Playlists.js'

export function Sidebar(props) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">{props.personalName}</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <PlayLists
            link=""
            urlImg="img/playlist01.png"
            altImg="day's playlist"
          />
          <PlayLists
            link=""
            urlImg="img/playlist02.png"
            altImg="day's playlist"
          />
          <PlayLists
            link=""
            urlImg="img/playlist03.png"
            altImg="day's playlist"
          />
        </div>
      </div>
    </div>
  )
}
