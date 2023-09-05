import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/Login/LoginPage.jsx'
import { MainPage } from './pages/Main/MainPage.jsx'
import { NotFoundPage } from './pages/NotFound/NotFoundPage.jsx'
import { RegistrationPage } from './pages/Registration/RegistrationPage.jsx'
import { FavoritesPage } from './pages/Favorites/FavoritesPage.jsx'
import { CategoryPage } from './pages/Category/CategoryPage.jsx'
import { ProtectedRoute } from './protectedRoute.js'
import { UserContext, useUserContext } from './contexts/userContext.jsx'

export const AppRoutes = ({ setUser, isErrorApp }) => {
  const user = useUserContext(UserContext)
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route
          path="/"
          element={<MainPage setUser={setUser} isErrorApp={isErrorApp} />}
        />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Route>

      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  )
}
