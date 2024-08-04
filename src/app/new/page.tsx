import Link from "next/link";
import { redirect } from "next/navigation";

async function addTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, complete: false }),
  });
  redirect("/");
}

function NewTodo() {
  return (
    <>
      <h1 className="font-semibold text-xl">Add New Todo</h1>
      <form className="max-w-lg" action={addTodo}>
        <input
          name="title"
          type="text"
          className="w-full m-4 rounded p-2 border-gray-200 text-slate-900 font-medium"
        />
        <br />
        <div className="flex justify-end gap-2">
          <Link
            href="/"
            className="w-28 h-8 rounded border border-red-500 text-center p-0.5 text-red-500"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="w-28 h-8 rounded border border-gray-200"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default NewTodo;
