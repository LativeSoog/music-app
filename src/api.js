const host = 'https://skypro-music-api.skyeng.tech/'
let catalog = ''

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
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Пользователь с таким именем или почтой уже существует')
    }
  })
}

export const authUserApi = async ({ email, password }) => {
  catalog = 'user/login/'

  return fetch(host + catalog, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json()
    } else if (response.status === 401) {
      throw new Error('Пользователь с таким email или паролем не найден')
    }
  })
}

export const getUserAccessToken = async ({ email, password }) => {
  catalog = 'user/token/'

  return fetch(host + catalog, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Произошла ошибка при получении токена')
    }
  })
}
