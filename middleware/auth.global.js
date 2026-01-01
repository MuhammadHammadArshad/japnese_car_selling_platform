import { useAuthStore } from '~/stores/auth'


export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useSanctumAuth()

  const publicExactRoutes = ['/', '/login']
  const publicRoutePrefixes = [
    '/register', '/forget-password','/verify-forget-password-token', '/reset-password', '/search',
    '/search-details', '/catalog', '/dealer-details',
    '/blog', '/new-car', '/about', '/why-choose-sat', '/sitemap'
  ]

  const isExactPublic = publicExactRoutes.includes(to.path)
  const isPrefixPublic = publicRoutePrefixes.some(prefix => to.path.startsWith(prefix))
  const isPublicRoute = isExactPublic || isPrefixPublic

  if (!user.value && !isPublicRoute) return navigateTo('/login')
  if (user.value && to.path === '/login') return navigateTo('/')
})

