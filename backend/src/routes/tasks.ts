import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// Get all tasks for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const tasks = await prisma.task.findMany({
      where: { userId }
    })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' })
  }
})

// Create a new task
router.post('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const { title, description } = req.body
    const task = await prisma.task.create({
      data: { 
        title, 
        description, 
        userId 
      }
    })
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' })
  }
})

export default router 