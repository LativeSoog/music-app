import { PlayLists, PlayListsLoading } from './Playlists.js'

export function Sidebar({ personalName, loadApp }) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">{personalName}</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          {loadApp ? (
            <PlayLists
              link=""
              urlImg="img/playlist01.png"
              altImg="day's playlist"
            />
          ) : (
            <PlayListsLoading />
          )}
          {loadApp ? (
            <PlayLists
              link=""
              urlImg="img/playlist02.png"
              altImg="day's playlist"
            />
          ) : (
            <PlayListsLoading />
          )}
          {loadApp ? (
            <PlayLists
              link=""
              urlImg="img/playlist03.png"
              altImg="day's playlist"
            />
          ) : (
            <PlayListsLoading />
          )}
        </div>
      </div>
    </div>
  )
}
