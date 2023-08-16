const host = 'https://painassasin.online/'
let catalog = ''

export const getAllTrack = async () => {
  let catalog = 'catalog/track/all/'
  return fetch(host + catalog, {
    method: 'GET',
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error('Ошибка сервера')
    } else {
      return await response.json()
    }
  })
}
