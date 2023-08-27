import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'

const animationSkeletonMixin = css`
  @keyframes appLoading {
    0% {
      background-color: #313131;
    }
    25% {
      background-color: #4e4e4e;
    }
    50% {
      background-color: #313131;
    }
    75% {
      background-color: #4e4e4e;
    }
    100% {
      background-color: #4e4e4e;
    }
  }

  animation: appLoading 3s ease-in-out;
`

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`

export const SidebarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`

export const SidebarLogoutBtn = styled.svg`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  fill: transparent;
  stroke: #696969;

  &:hover {
    cursor: pointer;
    stroke: #acacac;
  }
`

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const SidebarLink = styled(Link)`
  width: 100%;
  height: 100%;
`

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`

export const SidebarItemSkeleton = styled.div`
  width: 250px;
  height: 150px;
  margin-bottom: 30px;
  ${animationSkeletonMixin}
`
