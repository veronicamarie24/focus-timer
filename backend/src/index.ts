import express from 'express'

const app = express()
const PORT = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from backend')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
