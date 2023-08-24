const host = 'https://painassasin.online/'
let catalog = ''

export const getAllTrack = async () => {
  catalog = 'catalog/track/all/'
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

export const registrationUsersApi = async ({ username, email, password }) => {
  catalog = 'user/signup/'

  return fetch(host + catalog, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      response.json().then((json) => {
        console.log(json)
      })
    } else {
      return response
    }
  })
}
