import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
