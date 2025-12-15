import { createRoot } from 'react-dom/client'
import '~/styles/global.css'
import '~/styles/index.css'
import App from '~/App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeContextProvider } from './contexts/theme/themeProvider'

console.log('🚀 main.tsx loaded, root element:', document.getElementById('root'))

const rootEl = document.getElementById('root')
if (!rootEl) {
  console.error('❌ Root element not found!')
  throw new Error('Root element with id "root" not found')
}

try {
  createRoot(rootEl).render(
    <ThemeContextProvider>
      <CssBaseline />
      <App />
    </ThemeContextProvider>
  )
  console.log('✅ App rendered successfully')
} catch (error) {
  console.error('❌ Failed to render app:', error)
  throw error
}
