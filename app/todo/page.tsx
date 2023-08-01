"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

const Page = () => {
  useEffect(() => {
    const handle = async () => {
      const response = await fetch("./api/fetchAll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const todos = await response.json();
      setTodos(todos);
      setContent("");
    };

    handle();
  }, []);

  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "305c9c03-7be1-4986-8bb3-07ae8221b3bc",
      created_at: "2023-07-28T08:51:03.903Z",
      user_id: "test",
      title: "ダミーでござる",
      memo: null,
      state: "ready",
    },
  ]);

  const handleSaveClick = async () => {
    const response = await fetch("./api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    const todos = await response.json();

    setTodos(todos);
    setContent("");
  };

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">TODO</h1>
      <ul>
        {todos.map((post) => (
          <li key={post.id}>
            <Link
              href={{
                pathname: "/todo/detail",
                query: { todoid: post.id, title: post.title },
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <input
        placeholder="content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <div onClick={handleSaveClick}>SAve</div>
    </div>
  );
};

export default Page;
