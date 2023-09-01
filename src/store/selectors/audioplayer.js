const audioPlayerSelector = (store) => store.AudioPlayer

export const audioPlayerCurrentSong = (store) =>
  audioPlayerSelector(store)?.currentSong || []

export const audioPlayerIsPlaying = (store) =>
  audioPlayerSelector(store)?.isPlaying
