import { useState } from 'react'
import styled, { css } from 'styled-components'

const btnTextHoverMixin = css`
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
`

const btnTextActiveMixin = css`
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
`

const StyledFilterContent = styled.div`
  min-width: 248px;
  min-height: 305px;
  position: absolute;
  background-color: #313131;
  border-radius: 12px;
  top: 50px;
  left: 0;
`

const StyledFilterBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  row-gap: 28px;
  max-height: 237px;
  overflow-y: scroll;
  margin: 34px;
`

const StyledFilterBoxItem = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;

  &:hover {
    text-decoration: underline;
    color: #b672ff;
  }
`

const AuthorsTrack = () => {
  return (
    <StyledFilterContent>
      <StyledFilterBox>
        <StyledFilterBoxItem>Nero</StyledFilterBoxItem>
        <StyledFilterBoxItem>Dynoro, Outwork, Mr. Gee</StyledFilterBoxItem>
        <StyledFilterBoxItem>Ali Bakgor</StyledFilterBoxItem>
        <StyledFilterBoxItem>Стоункат, Psychopath</StyledFilterBoxItem>
        <StyledFilterBoxItem>Jaded, Will Clarke, AR/CO</StyledFilterBoxItem>
        <StyledFilterBoxItem>Blue Foundation, Zeds Dead</StyledFilterBoxItem>
        <StyledFilterBoxItem>
          HYBIT, Mr. Black, Offer Nissim, Hi Profile
        </StyledFilterBoxItem>
        <StyledFilterBoxItem>minthaze</StyledFilterBoxItem>
        <StyledFilterBoxItem>Calvin Harris, Disciples</StyledFilterBoxItem>
        <StyledFilterBoxItem>Tom Boxer</StyledFilterBoxItem>
      </StyledFilterBox>
    </StyledFilterContent>
  )
}

const YearTrack = () => {
  return (
    <StyledFilterContent>
      <StyledFilterBox>
        <StyledFilterBoxItem>Более новые</StyledFilterBoxItem>
        <StyledFilterBoxItem>Более старые</StyledFilterBoxItem>
      </StyledFilterBox>
    </StyledFilterContent>
  )
}

const GenreTrack = () => {
  return (
    <StyledFilterContent>
      <StyledFilterBox>
        <StyledFilterBoxItem>Рок</StyledFilterBoxItem>
        <StyledFilterBoxItem>Хип-Хоп</StyledFilterBoxItem>
        <StyledFilterBoxItem>Поп-музыка</StyledFilterBoxItem>
        <StyledFilterBoxItem>Техно</StyledFilterBoxItem>
        <StyledFilterBoxItem>Инди</StyledFilterBoxItem>
        <StyledFilterBoxItem>Классическая</StyledFilterBoxItem>
      </StyledFilterBox>
    </StyledFilterContent>
  )
}

const StyledCenterBlockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`

const StyledFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

const StyledFilterButton = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    ${btnTextHoverMixin}
  }

  &:active {
    ${btnTextActiveMixin}
  }
`

export function SearchTrack(props) {
  const [filter, setFilter] = useState(null)
  const filterButton = (userFilter) => {
    if (filter === userFilter) {
      setFilter(null)
    } else setFilter(userFilter)
  }
  return (
    <StyledCenterBlockFilter>
      <StyledFilterTitle>Искать по:</StyledFilterTitle>
      <StyledFilterButton
        onClick={() => {
          filterButton('author')
        }}
      >
        исполнителю
        {filter === 'author' && <AuthorsTrack />}
      </StyledFilterButton>

      <StyledFilterButton
        onClick={() => {
          filterButton('year')
        }}
      >
        году выпуска
        {filter === 'year' && <YearTrack />}
      </StyledFilterButton>

      <StyledFilterButton
        onClick={() => {
          filterButton('genre')
        }}
      >
        жанру
        {filter === 'genre' && <GenreTrack />}
      </StyledFilterButton>
    </StyledCenterBlockFilter>
  )
}
