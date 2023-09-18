import { useDispatch, useSelector } from 'react-redux'
import * as S from './style.js'
import { setFilterPlaylist } from '../../store/actions/creators/audioplayer.js'
import { audioPlayerSetIsFilter } from '../../store/selectors/audioplayer.js'

export function SearchLine() {
  const dispatch = useDispatch()
  const stateFilters = useSelector(audioPlayerSetIsFilter)

  const changeSearch = (e) => {
    dispatch(
      setFilterPlaylist({
        ...stateFilters,
        searchNameTrack: e.target.value,
        status: true,
      }),
    )
  }

  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => {
          changeSearch(e)
        }}
      ></S.SearchText>
    </S.CenterblockSearch>
  )
}
