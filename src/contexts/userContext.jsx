import { useContext } from 'react'

export const UserContext = React.createContext(null)

export const useUserContext = () => {
  const user = useContext(UserContext)

  return user
}
