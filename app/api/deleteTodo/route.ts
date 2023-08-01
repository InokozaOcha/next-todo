import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("何がでるかな？");
  const { id } = await req.json();
  console.log(id);
  try {
    await prisma.todo.delete({
      where: {
        id: id,
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
