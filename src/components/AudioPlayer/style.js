import styled, { css } from 'styled-components'

const playerBtnMixin = css`
  padding: 5px;
  display: flex;
  align-items: center;
`

const btnIconHoverMixin = css`
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
`

const btnIconActiveMixin = css`
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
`

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const BarPlayerTimeProgress = styled.div`
  font-size: 20px;
  text-align: right;
`

export const BarPlayerProgress = styled.input`
  --progress-height: 8px;
  --progress-color: #b672ff;
  --progress-color: ${(props) => props.$color ?? '#b672ff'};

  --progress-bg-color: #2e2e2e;

  margin: 0;
  width: 100%;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }
  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */
  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }
  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }
  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

export const PlayerBtnPrev = styled.div`
  ${playerBtnMixin};
  margin-right: 23px;
  cursor: pointer;
`
export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerBtnPlay = styled.div`
  ${playerBtnMixin};
  cursor: pointer;
  margin-right: 23px;
`

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerBtnNext = styled.div`
  ${playerBtnMixin};
  margin-right: 28px;
  fill: #a53939;
  cursor: pointer;
`

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`

export const PlayerBtnRepeat = styled.div`
  ${playerBtnMixin};
  margin-right: 24px;

  :hover {
    ${btnIconHoverMixin};
  }

  :active {
    ${btnIconActiveMixin}
  }
`

export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const PlayerBtnShuffle = styled.div`
  ${playerBtnMixin};
  display: flex;
  align-items: center;

  :hover {
    ${btnIconHoverMixin};
  }

  :active {
    ${btnIconActiveMixin}
  }
`

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const PlayerTrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`

export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackPlayAuthor = styled.div`
  grid-area: author;
  min-width: 49px;
`

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
`

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`

export const BarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`

export const VolumeProgress = styled.div`
  width: 109px;
  cursor: pointer;
`

export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
`

export const TrackPlayLikeDis = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`

export const TrackPlayLike = styled.div`
  padding: 5px;

  :hover {
    ${btnIconHoverMixin};
  }

  :active {
    ${btnIconActiveMixin}
  }
`

export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const TrackPlayLikedSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  fill: #b672ff;
  stroke: #b672ff;
`

export const TrackPlayDislike = styled.div`
  margin-left: 28.5px;

  :hover {
    ${btnIconHoverMixin};
  }

  :active {
    ${btnIconActiveMixin}
  }
`

export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`

export const TrackPlayAuthorSkeleton = styled.div`
  width: 59px;
  height: 15px;
`
export const TrackPlayAlbumSkeleton = styled.div`
  width: 59px;
  height: 15px;
  animation: appLoading 3s ease-in-out;
`

export const AudioComponent = styled.audio`
  display: none;
`
