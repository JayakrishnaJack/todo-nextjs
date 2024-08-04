"use client";

interface Todo {
  id: string;
  title: string;
  complete: boolean;
}

function ActionButtons({ item }: { item: Todo }) {
  const onClickDelete = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
      method: "DELETE",
      body: JSON.stringify({ ...item }),
    });

    window.location.reload();
  };

  const onClickComplete = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...item, complete: !item.complete }),
    });

    window.location.reload();
  };

  return (
    <div className="flex gap-2">
      {!item.complete && (
        <button className="text-orange-400" onClick={onClickComplete}>
          Done
        </button>
      )}
      <button className="text-red-500" onClick={onClickDelete}>
        Delete
      </button>
    </div>
  );
}

export default ActionButtons;
