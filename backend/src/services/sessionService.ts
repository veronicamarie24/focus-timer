import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type CreateSessionParams = {
  duration: number; // seconds
};

export async function createSession(params: CreateSessionParams) {
  const { duration } = params;
  return await prisma.session.create({ data: { duration: duration } });
}
