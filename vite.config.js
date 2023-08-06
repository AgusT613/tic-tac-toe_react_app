import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/https://github.com/AgusT613/tic-tac-toe_react_app/'
})
