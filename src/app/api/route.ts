import { prisma } from "@/db";

interface Todo {
  id: string;
  title: string;
  complete: boolean;
}

export async function GET() {
  const res = await prisma.todo.findMany({});
  return Response.json(res);
}

export async function POST(req: Request) {
  const data: Todo = await req.json();
  const res = await prisma.todo.create({ data });
  return Response.json(res);
}

export async function PATCH(req: Request) {
  const data: Todo = await req.json();
  const res = await prisma.todo.update({
    where: { id: data.id },
    data,
  });
  return Response.json(res);
}

export async function DELETE(req: Request) {
  const data: Todo = await req.json();
  const res = await prisma.todo.delete({ where: { id: data.id } });
  return Response.json(res);
}