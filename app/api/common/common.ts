export async function getAllNotes() {
  const todos = await prisma.todo.findMany();
  return todos;
}
