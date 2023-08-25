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
  let responseJson

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
    if (response.ok) {
      response.json()
    } else {
      throw new Error('Пользователь с таким именем или почтой уже существует')
    }
  })
}
