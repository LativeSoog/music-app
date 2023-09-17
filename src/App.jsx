import * as S from './style/AppStyle.js'
import { AppRoutes } from './routes.js'
import { useState, useEffect } from 'react'
import { UserContext } from './contexts/userContext.jsx'
import { useDispatch } from 'react-redux'
import { isLoadingApp } from './store/actions/creators/audioplayer.js'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [isErrorApp, setIsErrorApp] = useState(false)

  const dispatch = useDispatch()

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
