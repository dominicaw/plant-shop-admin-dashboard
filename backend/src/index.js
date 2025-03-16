import app from './app/index.js'
import { PORT } from './config/index.js'

app.listen(PORT, () => {
  console.log('application started', PORT)
})
