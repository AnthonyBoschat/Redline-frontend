## Exemple : ajout d'une feature

### 1. Service API (`features/notes/services/notesService.js`)
```javascript
import apiClient from '@services/apiClient'

export const notesService = {
  getByStudent: (studentId) => apiClient.get(`/students/${studentId}/notes`),
  create: (data)            => apiClient.post('/notes', data),
}
```

### 2. Hook (`features/notes/hooks/useStudentNotes.js`)
```javascript
import { useState, useEffect } from 'react'
import { notesService } from '../services/notesService'

export function useStudentNotes(studentID) {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    notesService.getByStudent(studentID)
      .then(setNotes)
      .finally(() => setLoading(false))
  }, [studentID])

  return { notes, loading }
}
```

### 3. Composant feature (`features/notes/components/GradesSummary.jsx`)
```javascript
import { useStudentNotes } from '../hooks/useStudentNotes'

export function GradesSummary({ studentID }) {
  const { notes, loading } = useStudentNotes(studentID)

  if (loading) return Chargement...

  return (
    
      {notes.map(note => (
        {note.libelle}: {note.score}/20
      ))}
    
  )
}
```

### 4. Page (`pages/student/Dashboard.jsx`)
```javascript
import { GradesSummary } from '@/features/notes/components/GradesSummary'

export function StudentDashboard() {

  return (
      <GradesSummary studentID={1}>
  )
}
```