const audioPlayerSelector = (store) => store.AudioPlayer

export const appIsLoading = (store) => audioPlayerSelector(store)?.isLoading

export const audioPlayerCurrentPlaylist = (store) =>
  audioPlayerSelector(store)?.currentPlaylist

export const audioPlayerSetActivePlaylist = (store) =>
  audioPlayerSelector(store)?.activePlaylist

export const audioPlayerCurrentSong = (store) =>
  audioPlayerSelector(store)?.currentSong || []

export const audioPlayerIsPlaying = (store) =>
  audioPlayerSelector(store)?.isPlaying
