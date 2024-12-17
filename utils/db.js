import { PrismaClient } from "@prisma/client";

function generateClient() {
  return new PrismaClient();
}

const prisma = generateClient();

export default prisma;

if (process.env.NODE_ENV === "production") globalThis.prisma = prisma;
