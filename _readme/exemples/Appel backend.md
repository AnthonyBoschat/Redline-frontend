# Exemple - Appel backend

## Service API centralisé

Le fichier `src/services/apiClient.js` gère :
- L'URL de base (depuis `.env`)
- L'injection automatique du token JWT
- La redirection vers `/login` si 401 (sauf sur les endpoints d'auth)

## Usage dans une feature

### 1. Créer un service (`features/notes/services/notesService.js`)
```javascript
import apiClient from '@services/apiClient'

export const notesService = {
  getByStudent: (studentId) => apiClient.get(`/students/${studentId}/notes`),
  getById: (id)             => apiClient.get(`/notes/${id}`),
  create: (data)            => apiClient.post('/notes', data),
  update: (id, data)        => apiClient.put(`/notes/${id}`, data),
  delete: (id)              => apiClient.delete(`/notes/${id}`)
}
```

### 2. Utiliser dans un composant
```javascript
import { useState, useEffect } from 'react'
import { notesService } from '@features/notes/services/notesService'

export function useStudentNotes(studentId) {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    notesService.getByStudent(studentId)
      .then((res) => setNotes(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [studentId])

  return { notes, loading, error }
}
```

### 3. Gestion du token
```javascript
// Après login réussi
localStorage.setItem('token', response.data.accessToken)

// Le token sera automatiquement injecté dans les prochaines requêtes
```