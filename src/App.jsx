import * as S from './style/AppStyle.js'
import { AppRoutes } from './routes.js'
import { useState, useEffect } from 'react'
import { getAllTrack } from './api.js'
import { UserContext } from './contexts/userContext.jsx'
import { useDispatch } from 'react-redux'
import {
  getTrackListAll,
  isLoadingApp,
} from './store/actions/creators/audioplayer.js'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [isErrorApp, setIsErrorApp] = useState(false)

  console.log(user)

  const dispatch = useDispatch()

  useEffect(() => {
    try {
      getAllTrack().then((trackList) => {
        dispatch(getTrackListAll(trackList))
      })
    } catch (error) {
      setIsErrorApp(true)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(isLoadingApp(true))
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <S.StyLeGlobal />
      <UserContext.Provider value={user}>
        <AppRoutes setUser={setUser} isErrorApp={isErrorApp} />
      </UserContext.Provider>
    </>
  )
}

export default App
