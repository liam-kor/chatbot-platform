import { PrismaClient } from '@prisma/client';
import express from 'express';

export const prisma = new PrismaClient();
const { JWT_SECRET } = process.env;

export interface Context {
  request: {
    req: express.Request;
  };
  prisma: PrismaClient;
  appSecret: string;
}

export function createContext(request: { req: express.Request }): Context {
  console.log(request.req.body.query);
  console.log(request.req.body.variables);
  return {
    request,
    prisma,
    appSecret: JWT_SECRET,
  };
}
