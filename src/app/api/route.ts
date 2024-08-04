import { prisma } from "@/db";

interface Todo {
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
