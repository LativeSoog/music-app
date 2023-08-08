import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/Login/LoginPage.jsx'
import { MainPage } from './pages/Main/MainPage.jsx'
import { NotFoundPage } from './pages/NotFound/NotFoundPage.jsx'
import { RegistrationPage } from './pages/Registration/RegistrationPage.jsx'
import { FavoritesPage } from './pages/Favorites/FavoritesPage.jsx'
import { CategoryPage } from './pages/Category/CategoryPage.jsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
    </Routes>
  )
}
