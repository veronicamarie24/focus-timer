import { Request, Response } from "express";
import * as sessionService from "../services/sessionService";

export type CreateSessionRequestBody = {
  duration: number; // seconds
};

export async function createSession(
  req: Request<{}, {}, CreateSessionRequestBody>,
  res: Response
) {
  const { duration } = req.body;
  sessionService.createSession({ duration });
}

export async function updateSession() {

}

export async function heartbeatSession() {
  
}