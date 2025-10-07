import App from '@/App'
import { createBrowserRouter } from 'react-router-dom'

// Layouts
import MainLayout from '@/layouts/main-layout'

// Pages
import Index from '@/pages/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Main
      {
        path: '',
        element: <MainLayout />,
        children: [
          { path: '', element: <Index /> },
        ]
      },
    ]
  }
])
