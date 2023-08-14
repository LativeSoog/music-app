import * as S from './style/AppStyle.js'
import { AppRoutes } from './routes.js'
import { useState } from 'react'

function App() {
  const user = window.localStorage.getItem('user')

  return (
    <>
      <S.StyLeGlobal />
      <AppRoutes user={user} />
    </>
  )
}

export default App
