import { SectionTrackList } from '../../components/TrackList/SectionTrackList.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentPlayList } from '../../store/actions/creators/audioplayer'
import { useEffect } from 'react'
import { appIsLoading } from '../../store/selectors/audioplayer.js'

export const FavoritesPage = ({ isErrorApp }) => {
  const isLoading = useSelector(appIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(selectCurrentPlayList(1))
  })

  return <SectionTrackList loadApp={isLoading} isErrorApp={isErrorApp} />
}
