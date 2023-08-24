import * as S from './style/AppStyle.js'
import { AppRoutes } from './routes.js'
import { useState, useEffect } from 'react'
import { getAllTrack } from './api.js'

function App() {
  const user = window.localStorage.getItem('user')
  const [isErrorApp, setIsErrorApp] = useState(false)
  const [currentSong, setCurrentSong] = useState(false)
  const [trackListAll, setTrackListAll] = useState([])

  console.log(window.localStorage)

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
      <AppRoutes
        user={user}
        isErrorApp={isErrorApp}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        trackListAll={trackListAll}
      />
    </>
  )
}

export default App
