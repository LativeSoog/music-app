import { useState } from 'react'

const AuthorsTrack = () => {
  return (
    <div className="filter-content__authors">
      <div className="filter-box">
        <p className="filter-box__item">Nero</p>
        <p className="filter-box__item">Dynoro, Outwork, Mr. Gee</p>
        <p className="filter-box__item">Ali Bakgor</p>
        <p className="filter-box__item">Стоункат, Psychopath</p>
        <p className="filter-box__item">Jaded, Will Clarke, AR/CO</p>
        <p className="filter-box__item">Blue Foundation, Zeds Dead</p>
        <p className="filter-box__item">
          HYBIT, Mr. Black, Offer Nissim, Hi Profile
        </p>
        <p className="filter-box__item">minthaze</p>
        <p className="filter-box__item">Calvin Harris, Disciples</p>
        <p className="filter-box__item">Tom Boxer</p>
      </div>
    </div>
  )
}

const YearTrack = () => {
  return (
    <div className="filter-content__years">
      <div className="filter-box">
        <p className="filter-box__item">Более новые</p>
        <p className="filter-box__item">Более старые</p>
      </div>
    </div>
  )
}

const GenreTrack = () => {
  return (
    <div className="filter-content__years">
      <div className="filter-box">
        <p className="filter-box__item">Рок</p>
        <p className="filter-box__item">Хип-Хоп</p>
        <p className="filter-box__item">Поп-музыка</p>
        <p className="filter-box__item">Техно</p>
        <p className="filter-box__item">Инди</p>
        <p className="filter-box__item">Классическая</p>
      </div>
    </div>
  )
}

export function SearchTrack(props) {
  const [filter, setFilter] = useState(false)
  const filterButton = (userFilter) => {
    if (filter === userFilter) {
      setFilter(false)
    } else setFilter(userFilter)
  }
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className="filter__button button-author _btn-text"
        onClick={() => {
          filterButton('author')
        }}
      >
        исполнителю
        {filter === 'author' && <AuthorsTrack />}
      </div>

      <div
        className="filter__button button-year _btn-text"
        onClick={() => {
          filterButton('year')
        }}
      >
        году выпуска
        {filter === 'year' && <YearTrack />}
      </div>

      <div
        className="filter__button button-genre _btn-text"
        onClick={() => {
          filterButton('genre')
        }}
      >
        жанру
        {filter === 'genre' && <GenreTrack />}
      </div>
    </div>
  )
}
