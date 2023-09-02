const audioPlayerSelector = (store) => store.AudioPlayer

export const audioPlayerGetTrackList = (store) =>
  audioPlayerSelector(store)?.tracklist

export const audioPlayerCurrentSong = (store) =>
  audioPlayerSelector(store)?.currentSong || []

export const audioPlayerIsPlaying = (store) =>
  audioPlayerSelector(store)?.isPlaying
