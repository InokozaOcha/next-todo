declare global {
  var prisma: PrismaClient;
}

import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    // log: ["query", "error", "info", "warn"],
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      //    log: ["query", "error", "info", "warn"],
    });
  }
  prisma = global.prisma;
}

export default prisma;