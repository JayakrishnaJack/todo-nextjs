import Link from "next/link";

interface Todo {
  id: string;
  title: string;
  complete: boolean;
}

export default async function Home() {
  const res: Todo[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
    cache: "no-store",
  }).then(async (res) => await res.json());

  return (
    <div>
      <div className="w-full flex justify-between">
        <h1 className="font-semibold text-xl">Todo App</h1>
        <Link href="/new" className="rounded border border-gray-200 px-4 py-2">
          Add New
        </Link>
      </div>
      <ul className="px-6 p-y2 m-4 h-[87vh] overflow-y-scroll space-y-2">
        {res.map((res) => (
          <li
            key={res.id}
            className="w-full border rounded border-gray-200 p-4"
          >
            {res.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
