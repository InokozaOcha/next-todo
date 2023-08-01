import type { NextApiHandler } from "next";
import prisma from "@/lib/prisma";

const handler: NextApiHandler = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
    return todos;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default handler;
