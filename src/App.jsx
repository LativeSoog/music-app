import * as S from './style/AppStyle.js'
import { AppRoutes } from './routes.js'
import { useState, useEffect } from 'react'
import { getAllTrack } from './api.js'
import { UserContext } from './contexts/userContext.jsx'

function App() {
  // const User = window.localStorage.getItem('user')

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [isErrorApp, setIsErrorApp] = useState(false)
  const [currentSong, setCurrentSong] = useState(false)
  const [trackListAll, setTrackListAll] = useState([])

  useEffect(() => {
    try {
      getAllTrack().then((trackList) => {
        setTrackListAll(trackList)
      })
    } catch (error) {
      setIsErrorApp(true)
    }
  }, [])

  return (
    <>
      <S.StyLeGlobal />
      <UserContext.Provider value={user}>
        <AppRoutes
          setUser={setUser}
          isErrorApp={isErrorApp}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          trackListAll={trackListAll}
        />
      </UserContext.Provider>
    </>
  )
}

export default App
