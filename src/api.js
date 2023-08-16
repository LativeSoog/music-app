export const getAllTrack = async () => {
  const response = await fetch('https://painassasin.online/catalog/track/all/')

  if (!response.ok) {
    throw new Error('Произошла ошибка сервера')
  }

  const data = await response.json()

  return data
}
