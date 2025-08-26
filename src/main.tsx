import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import { ThemeProvider } from './provider/ThemeProvider'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/Store'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
 <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
  </ReduxProvider>
  </StrictMode>,
)
