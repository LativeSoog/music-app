export const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={authorizationBtn}>Войти</button>
      <button onClick={logoutBtn}>Выйти</button>
    </div>
  )
}

const authorizationBtn = () => {
  window.localStorage.setItem('user', 'kruk')
}

const logoutBtn = () => {
  window.localStorage.removeItem('user')
}
