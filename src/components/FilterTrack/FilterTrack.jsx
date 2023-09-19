import { useEffect, useState } from 'react'
import * as S from './style.js'
import { useDispatch, useSelector } from 'react-redux'
import { audioPlayerSetIsFilter } from '../../store/selectors/audioplayer.js'
import { setFilterPlaylist } from '../../store/actions/creators/audioplayer.js'
import { useGetAllTrackQuery } from '../../services/audioplayer.js'

const AuthorsTrack = ({ authorList }) => {
  const dispatch = useDispatch()
  const stateFilters = useSelector(audioPlayerSetIsFilter)

  const filterAddAuthors = (author) => {
    const addedAuthor = {
      ...stateFilters,
      status: true,
      authors: [...stateFilters.authors, author],
    }
    dispatch(setFilterPlaylist(addedAuthor))
  }

  const filterDelAuthors = (author) => {
    const currentAuthors = [...stateFilters.authors]
    const authorIndex = currentAuthors.indexOf(author)

    currentAuthors.splice(authorIndex, 1)

    const deletedAuthor = {
      ...stateFilters,
      status: true,
      authors: [...currentAuthors],
    }
    dispatch(setFilterPlaylist(deletedAuthor))
  }

  const uniqueAuthors = [...new Set(authorList)]

  return (
    <S.FilterContent>
      <S.FilterBox>
        {uniqueAuthors.map((author) =>
          !stateFilters.authors.includes(author) ? (
            <S.FilterBoxItem
              key={author.id}
              onClick={() => filterAddAuthors(author)}
            >
              {author}
            </S.FilterBoxItem>
          ) : (
            <S.FilterBoxItemActive
              key={author.id}
              onClick={() => filterDelAuthors(author)}
            >
              {author}
            </S.FilterBoxItemActive>
          ),
        )}
      </S.FilterBox>
    </S.FilterContent>
  )
}

const YearTrack = ({ setFilter }) => {
  const dispatch = useDispatch()
  const stateFilters = useSelector(audioPlayerSetIsFilter)

  const filterYear = (userFilter) => {
    dispatch(
      setFilterPlaylist({ ...stateFilters, status: true, years: userFilter }),
    )
    setFilter(null)
  }

  return (
    <S.FilterContent>
      <S.FilterBox>
        {stateFilters.years === false ? (
          <S.FilterBoxItemActive>По умолчанию</S.FilterBoxItemActive>
        ) : (
          <S.FilterBoxItem onClick={() => filterYear(false)}>
            По умолчанию
          </S.FilterBoxItem>
        )}

        {stateFilters.years === 'new' ? (
          <S.FilterBoxItemActive>Более новые</S.FilterBoxItemActive>
        ) : (
          <S.FilterBoxItem onClick={() => filterYear('new')}>
            Более новые
          </S.FilterBoxItem>
        )}

        {stateFilters.years === 'old' ? (
          <S.FilterBoxItemActive>Более старые</S.FilterBoxItemActive>
        ) : (
          <S.FilterBoxItem onClick={() => filterYear('old')}>
            Более старые
          </S.FilterBoxItem>
        )}
      </S.FilterBox>
    </S.FilterContent>
  )
}

const GenreTrack = ({ genreList }) => {
  const dispatch = useDispatch()
  const stateFilters = useSelector(audioPlayerSetIsFilter)

  const filterAddGenre = (genre) => {
    const addedGenre = {
      ...stateFilters,
      status: true,
      genre: [...stateFilters.genre, genre],
    }
    dispatch(setFilterPlaylist(addedGenre))
  }

  const filterDelGenre = (genre) => {
    const currentGenre = [...stateFilters.genre]
    const genreIndex = currentGenre.indexOf(genre)

    currentGenre.splice(genreIndex, 1)

    const deletedGenre = {
      ...stateFilters,
      status: true,
      genre: [...currentGenre],
    }
    dispatch(setFilterPlaylist(deletedGenre))
  }

  const uniqueGenre = [...new Set(genreList)]

  return (
    <S.FilterContent>
      <S.FilterBox>
        {uniqueGenre.map((genre) =>
          !stateFilters.genre.includes(genre) ? (
            <S.FilterBoxItem
              key={genre.id}
              onClick={() => filterAddGenre(genre)}
            >
              {genre}
            </S.FilterBoxItem>
          ) : (
            <S.FilterBoxItemActive
              key={genre.id}
              onClick={() => filterDelGenre(genre)}
            >
              {genre}
            </S.FilterBoxItemActive>
          ),
        )}
      </S.FilterBox>
    </S.FilterContent>
  )
}

export function FilterTrack() {
  const stateFilters = useSelector(audioPlayerSetIsFilter)
  const { data: playlistInfo } = useGetAllTrackQuery()
  const [filterAuthors, setFilterAuthors] = useState()
  const [filterGenre, setFilterGenre] = useState()

  useEffect(() => {
    setFilterAuthors(playlistInfo?.map((track) => track.author))
    setFilterGenre(playlistInfo?.map((track) => track.genre))
  }, [playlistInfo])

  const [filter, setFilter] = useState(null)

  const filterButton = (e, userFilter) => {
    e.stopPropagation()
    if (filter === userFilter) {
      setFilter(null)
    } else setFilter(userFilter)
  }
  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton
        $active={filter === 'author' ? true : false}
        onClick={(e) => {
          filterButton(e, 'author')
        }}
      >
        исполнителю
        {stateFilters.authors?.length > 0 && (
          <S.FilterCounter>{stateFilters.authors.length}</S.FilterCounter>
        )}
        {filter === 'author' && <AuthorsTrack authorList={filterAuthors} />}
      </S.FilterButton>

      <S.FilterButton
        $active={filter === 'year' ? true : false}
        onClick={(e) => {
          filterButton(e, 'year')
        }}
      >
        году выпуска
        {filter === 'year' && <YearTrack setFilter={setFilter} />}
      </S.FilterButton>

      <S.FilterButton
        $active={filter === 'genre' ? true : false}
        onClick={(e) => {
          filterButton(e, 'genre')
        }}
      >
        жанру
        {stateFilters.genre?.length > 0 && (
          <S.FilterCounter>{stateFilters?.genre.length}</S.FilterCounter>
        )}
        {filter === 'genre' && <GenreTrack genreList={filterGenre} />}
      </S.FilterButton>
    </S.CenterBlockFilter>
  )
}
