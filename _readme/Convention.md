# Conventions de nommage

## Fichiers et dossiers

| Type | Convention | Exemple |
|------|------------|---------|
| Dossiers | lowercase | `components/`, `features/`, `hooks/` |
| Composants React | PascalCase | `Button.jsx`, `GradesSummary.jsx` |
| Hooks | camelCase avec `use` | `useAuth.js`, `useStudentNotes.js` |
| Services | camelCase | `apiClient.js`, `notesService.js` |
| Utils | camelCase | `formatDate.js`, `calculateAverage.js` |
| Constants | camelCase | `regex.js`, `endpoints.js` |

## Composants React
```jsx
// PascalCase pour le nom du fichier ET du composant
// Button.jsx
export function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>
}
```

## Hooks
```jsx
// camelCase, toujours préfixé par "use"
// useStudentNotes.js
export function useStudentNotes(studentId) {
  // ...
}
```

## Services
```javascript
// camelCase, suffixé par "Service"
// notesService.js
export const notesService = {
  getAll: () => apiClient.get('/notes'),
  getById: (id) => apiClient.get(`/notes/${id}`)
}
```

## Variables et fonctions

| Type | Convention | Exemple |
|------|------------|---------|
| Variables | camelCase | `studentId`, `isLoading` |
| Fonctions | camelCase | `handleSubmit`, `formatDate` |
| Constantes globales | SCREAMING_SNAKE_CASE | `API_URL`, `MAX_FILE_SIZE` |
| Composants | PascalCase | `StudentDashboard`, `GradeForm` |

## Exemple de structure
```
features/
└── notes/
    ├── components/
    │   ├── GradesSummary.jsx
    │   └── GradeForm.jsx
    ├── hooks/
    │   └── useStudentNotes.js
    └── services/
        └── notesService.js
```

## Règle simple

- Exporte un composant React → **PascalCase**
- Tout le reste → **camelCase**