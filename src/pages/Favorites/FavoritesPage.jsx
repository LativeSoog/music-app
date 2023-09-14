import { SectionTrackList } from '../../components/TrackList/SectionTrackList.jsx'
import { useSelector } from 'react-redux'
import { appIsLoading } from '../../store/selectors/audioplayer.js'

export const FavoritesPage = ({ isErrorApp }) => {
  const isLoading = useSelector(appIsLoading)
  return <SectionTrackList loadApp={isLoading} isErrorApp={isErrorApp} />
}
