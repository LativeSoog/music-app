import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/Login/LoginPage.jsx'
import { MainPage } from './pages/Main/MainPage.jsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
