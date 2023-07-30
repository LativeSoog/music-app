import { useState } from 'react'
import * as S from './style.js'

const AuthorsTrack = () => {
  return (
    <S.FilterContent>
      <S.FilterBox>
        <S.FilterBoxItem>Nero</S.FilterBoxItem>
        <S.FilterBoxItem>Dynoro, Outwork, Mr. Gee</S.FilterBoxItem>
        <S.FilterBoxItem>Ali Bakgor</S.FilterBoxItem>
        <S.FilterBoxItem>Стоункат, Psychopath</S.FilterBoxItem>
        <S.FilterBoxItem>Jaded, Will Clarke, AR/CO</S.FilterBoxItem>
        <S.FilterBoxItem>Blue Foundation, Zeds Dead</S.FilterBoxItem>
        <S.FilterBoxItem>
          HYBIT, Mr. Black, Offer Nissim, Hi Profile
        </S.FilterBoxItem>
        <S.FilterBoxItem>minthaze</S.FilterBoxItem>
        <S.FilterBoxItem>Calvin Harris, Disciples</S.FilterBoxItem>
        <S.FilterBoxItem>Tom Boxer</S.FilterBoxItem>
      </S.FilterBox>
    </S.FilterContent>
  )
}

const YearTrack = () => {
  return (
    <S.FilterContent>
      <S.FilterBox>
        <S.FilterBoxItem>Более новые</S.FilterBoxItem>
        <S.FilterBoxItem>Более старые</S.FilterBoxItem>
      </S.FilterBox>
    </S.FilterContent>
  )
}

const GenreTrack = () => {
  return (
    <S.FilterContent>
      <S.FilterBox>
        <S.FilterBoxItem>Рок</S.FilterBoxItem>
        <S.FilterBoxItem>Хип-Хоп</S.FilterBoxItem>
        <S.FilterBoxItem>Поп-музыка</S.FilterBoxItem>
        <S.FilterBoxItem>Техно</S.FilterBoxItem>
        <S.FilterBoxItem>Инди</S.FilterBoxItem>
        <S.FilterBoxItem>Классическая</S.FilterBoxItem>
      </S.FilterBox>
    </S.FilterContent>
  )
}

export function SearchTrack(props) {
  const [filter, setFilter] = useState(null)
  const filterButton = (userFilter) => {
    if (filter === userFilter) {
      setFilter(null)
    } else setFilter(userFilter)
  }
  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton
        onClick={() => {
          filterButton('author')
        }}
      >
        исполнителю
        {filter === 'author' && <AuthorsTrack />}
      </S.FilterButton>

      <S.FilterButton
        onClick={() => {
          filterButton('year')
        }}
      >
        году выпуска
        {filter === 'year' && <YearTrack />}
      </S.FilterButton>

      <S.FilterButton
        onClick={() => {
          filterButton('genre')
        }}
      >
        жанру
        {filter === 'genre' && <GenreTrack />}
      </S.FilterButton>
    </S.CenterBlockFilter>
  )
}
