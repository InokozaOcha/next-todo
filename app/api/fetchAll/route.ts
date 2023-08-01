import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const todos = await getAllNotes();
  return NextResponse.json(todos);
}

async function getAllNotes() {
  const todos = await prisma.todo.findMany();
  return todos;
}
