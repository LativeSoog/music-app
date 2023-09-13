const audioPlayerSelector = (store) => store.AudioPlayer

export const appIsLoading = (store) => audioPlayerSelector(store)?.isLoading

export const audioPlayerGetTrackList = (store) =>
  audioPlayerSelector(store)?.tracklist

export const audioPlayerCurrentPlaylist = (store) =>
  audioPlayerSelector(store)?.playlist

export const audioPlayerCurrentSong = (store) =>
  audioPlayerSelector(store)?.currentSong || []

export const audioPlayerIsPlaying = (store) =>
  audioPlayerSelector(store)?.isPlaying
