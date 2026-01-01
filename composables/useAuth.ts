export const useAuth = () => {
  const config = useRuntimeConfig();
  const token = useState<string | null>('auth_token', () => null)

  const login = async (username: string, password: string) => {
    // debugger
    try {
      const { data, error } = await useFetch(`${config.public.apiBase}/login`, {
        method: 'POST',
        body: { username, password },
        headers: { 'Content-Type': 'application/json' }
      })

      if (error.value) throw new Error(error.value.message)

      token.value = data.value?.token || null
      localStorage.setItem('auth_token', token.value!)

      return true
    } catch (err) {
      console.error('Login failed:', err)
      return false
    }
  }

  const logout = () => {
    token.value = null
    localStorage.removeItem('auth_token')
    navigateTo('/login')
  }

  const isAuthenticated = computed(() => !!token.value)

  onMounted(() => {
    if (!token.value) {
      const saved = localStorage.getItem('auth_token')
      if (saved) token.value = saved
    }
  })

  // Register Form Api
  //  const register = async (email: string, password: string, password_confirmation: string) => {
  //   try {
  //     const { data, error } = await useFetch(`${config.public.apiBase}/register`, {
  //       method: 'POST',
  //       body: { email, password, password_confirmation },
  //       headers: { 'Content-Type': 'application/json' }
  //     })

  //     if (error.value) throw new Error(error.value.message)

  //     return true
  //   } catch (err) {
  //     console.error('Registration failed:', err)
  //     return false
  //   }
  // }

  return { token, login, logout, isAuthenticated }
}