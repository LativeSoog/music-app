import * as S from './style.js'

export function SearchLine(props) {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
      ></S.SearchText>
    </S.CenterblockSearch>
  )
}
