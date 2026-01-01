import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({}),

  getters: {
    isLoggedIn: () => {
      const { user } = useSanctumAuth()
      return !!user.value
    }
  },

  actions: {
    async login(credentials) {
      const { login, fetchUser } = useSanctumAuth()
      await login(credentials)
      await fetchUser()
    },

    async logout() {
      const { logout } = useSanctumAuth()
      await logout()
    }
  }
})


