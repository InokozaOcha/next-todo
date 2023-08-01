"use client";
import React from "react";
import prisma from "@/lib/prisma";

const InputTest = () => {
  const input = async () => {
    await prisma.todo.create({
      data: {
        user_id: `test`,
        title: `自分でにゅうりdsfsdsdddddsご」`,
      },
    });
  };
  return <div onClick={() => input}>InputTest</div>;
};

export default InputTest;
