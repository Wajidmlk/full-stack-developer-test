export const SERVER_SETTINGS = {
  ADDRESSES: {
    LOCAL: '',
    REMOTE: ''
  },
  LISTENER: {
    PORT: 5000
  },
  API_CALLS: {
    USER_REQUESTS: {
      SIGN_IN: '/signin',
      SIGN_UP: '/signup',
    },
    PROJECT_RESQUESTS: {
      GET_ALL_PROFILES: '/getUserProfiles',
    },
  }
}

export const DB_SETINGS = {
  ADDRESSES: {
    LOCAL: '',
    REMOTE: ''
  },
  NAME: 'testproject',
  COLLECTIONS: {
    USERS: 'users',
    USER_PROFILES: 'userProfiles'
  }
}
