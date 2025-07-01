import { Router } from 'express'
import healthRoutes from './health'
import userRoutes from './users'
import taskRoutes from './tasks'

const router = Router()

router.use('/health', healthRoutes)
router.use('/users', userRoutes)
router.use('/tasks', taskRoutes)

router.get('/', (req, res) => {
  res.send('Hello from focus timer backend')
})

export default router 