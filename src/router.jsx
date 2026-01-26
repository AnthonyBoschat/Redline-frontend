import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ROUTE from './constants/route.js'


export const router = createBrowserRouter([
  {
    path: ROUTE.root,
    element: <App />
  },
//   {
//     path: ROUTE.auth.login,
//     element: <AuthLayout />,
//     children: [
//       { index: true, element: <Login /> }
//     ]
//   },
//   {
//     path: ROUTE.auth.register,
//     element: <AuthLayout />,
//     children: [
//       { index: true, element: <Register /> }
//     ]
//   },
//   {
//     path: '*',
//     element: <NotFound />
//   }
])