import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  const res = await prisma.todo.findMany({});

  return (
    <div>
      <div className="w-full flex justify-between">
        <h1 className="font-semibold text-xl">Todo App</h1>
        <Link href="/new" className="rounded border border-gray-200 px-4 py-2">
          Add New
        </Link>
      </div>
      <ul className="w-full px-6 p-y2">
        {res.map((res) => (
          <li key={res.id} className="">
            {res.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
