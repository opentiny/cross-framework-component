import vue from '@vitejs/plugin-vue'

export default {
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  server: {
    port: 5173,
    host: 'localhost',
    open: true
  },
  plugins: [vue()],
  define: {
    'process.env': Object.assign({}, {NODE_ENV: process.env.NODE_ENV})
  }
}
