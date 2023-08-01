import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { content } = await req.json();
  console.log("aaaaaaaaaaaaaaaaaaa");
  console.log(content);
  try {
    await prisma.todo.create({
      data: {
        user_id: `test`,
        title: content,
      },
    });
  } catch (e) {
    console.log("みすってんで");
    console.log(e);
  }

  const todos = await getAllNotes();
  return NextResponse.json(todos);
}

async function getAllNotes() {
  const todos = await prisma.todo.findMany();
  return todos;
}
