import type { NextApiHandler } from "next";
import prisma from "@/lib/prisma";
import { data } from "autoprefixer";

const handler: NextApiHandler = async (req, res) => {
  try {
    await prisma.todo.create({
      data: {
        ...req.body,
        updateedAt: new Date(),
      },
    });
    res.status(200).send("ok!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default handler;
