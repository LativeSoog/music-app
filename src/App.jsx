import * as S from './style/AppStyle.js'
import { AppRoutes } from './routes.js'
import { useState } from 'react'

function App() {
  const user = window.localStorage.getItem('user')
  const [currentSong, setCurrentSong] = useState()

  return (
    <>
      <S.StyLeGlobal />
      <AppRoutes
        user={user}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </>
  )
}

export default App
