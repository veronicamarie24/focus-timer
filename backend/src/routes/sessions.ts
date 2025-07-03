import { Request, Response, Router } from "express";
import * as sessionController from '../controllers/sessionController';

const router = Router();

// Create a session
// Session data should be persisted for analytics
// Session will not sync between tabs and will not continue if the tab is refreshed
//
router.post('/', sessionController.createSession);


// Update a session
// Sessions should be updated whenever the user stops the timer
// 
router.patch('/:id', sessionController.updateSession)


// Send heartbeat to the session
// Tells the server that the session is still active
// Should only be sent if the timer is actively running
//
router.post('/:id', sessionController.heartbeatSession)

export default router;