import { useDispatch } from 'react-redux'
import { selectCurrentPlayList } from '../../store/actions/creators/audioplayer'
import { useEffect } from 'react'

export const FavoritesPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(selectCurrentPlayList(1))
  })

  return (
    <div>
      <h1>Favorites Page</h1>
    </div>
  )
}
