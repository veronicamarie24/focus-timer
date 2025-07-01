import express from 'express'
import { PrismaClient } from '@prisma/client'
import routes from './routes'

const app = express()
const PORT = 3001
const prisma = new PrismaClient()

app.use(express.json())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Focus timer server running on http://localhost:${PORT}`)
})

process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})
