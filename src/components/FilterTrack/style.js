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

export const FilterContent = styled.div`
  min-width: 248px;
  min-height: 305px;
  position: absolute;
  background-color: #313131;
  border-radius: 12px;
  top: 50px;
  left: 0;
`

export const FilterBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  row-gap: 28px;
  max-height: 237px;
  overflow-y: scroll;
  margin: 34px;
`

export const FilterBoxAuthors = styled.div``

export const FilterBoxItem = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;

  &:hover {
    text-decoration: underline;
    color: #b672ff;
  }
`
export const FilterBoxItemActive = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #ad61ff;
  text-decoration: underline;
`

export const CenterBlockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
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

  ${(props) =>
    props.$active &&
    `
        color: #b672ff;
        border: 1px solid #9a48f1;
        &:hover {
            color: #b672ff !important;
            border: 1px solid #9a48f1 !important;
        }
        `}

  &:hover {
    ${btnTextHoverMixin}
  }
`

export const FilterCounter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #9a48f1;
  right: -8px;
  top: -9px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`
