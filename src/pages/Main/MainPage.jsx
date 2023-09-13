import { useEffect, useState } from 'react'
import { SectionTrackList } from '../../components/TrackList/SectionTrackList.jsx'

export const MainPage = ({ isErrorApp }) => {
  const [loadApp, setLoadingApp] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingApp(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return <SectionTrackList loadApp={loadApp} isErrorApp={isErrorApp} />
}
