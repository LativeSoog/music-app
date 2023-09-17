export const CATEGORIES = [
  {
    id: 1,
    name: 'Плейлист дня',
    urlImg: '/img/playlist01.png',
  },
  {
    id: 2,
    name: '100 танцевальных хитов',
    urlImg: '/img/playlist02.png',
  },
  {
    id: 3,
    name: 'Инди-заряд',
    urlImg: '/img/playlist03.png',
  },
]

export const formatTime = (second) => {
  let minutes = Math.floor(second / 60)
  let seconds = Math.floor(second % 60)

  if (seconds < 10) {
    seconds = '0' + seconds
  }

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  return `${minutes}:${seconds}`
}
