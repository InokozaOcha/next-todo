"use client";

import { useRouter } from "next/navigation";

const Page2 = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { todoid: string; title: string };
}) => {};

const Page = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { todoid: string; title: string };
}) => {
  const router = useRouter();
  const backToTodo = () => {
    router.push("/todo");
    router.replace("/todo");
  };

  const handleDelete = async (id: string) => {
    const response = await fetch("./../api/deleteTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const todos = await response.json();
  };

  return (
    <>
      <div className="m-4 font-bold">Blog ID:{searchParams.title}</div>
      <div
        style={{ width: "30px", margin: "100px" }}
        onClick={() => {
          handleDelete(searchParams.todoid);
          backToTodo();
        }}
      >
        x
      </div>

      <div onClick={backToTodo}>もどる</div>
    </>
  );
};

export default Page;
