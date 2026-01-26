import axios from 'axios'
import { API_URL } from '@/constants/env'

const ACCESS_TOKEN_STORAGE_KEY = 'token'

function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)
}

function redirectToLogin() {
  // évite de garder l’historique (retour arrière vers une page protégée)
  window.location.replace('/login')
}

function isAuthEndpoint(config) {
  const url = config?.url ?? ''
  return url.includes('/login') || url.includes('/refresh')
}

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
})

// Injecte le token à chaque requête
apiClient.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (!config.headers) {
    config.headers = {}
  }

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  } else {
    delete config.headers.Authorization
  }

  return config
})

// Gère les erreurs globales (401)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const statusCode = error?.response?.status

    // évite une boucle si l’endpoint d’auth renvoie 401
    if (statusCode === 401 && !isAuthEndpoint(error.config)) {
      clearAccessToken()
      redirectToLogin()
    }

    return Promise.reject(error)
  }
)

export default apiClient