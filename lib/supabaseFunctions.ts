import { Prisma, PrismaClient } from "@prisma/client";
import supabase, { Database } from "./supabase";

// テーブル名
export const TABLE_NAME = "todo";

// データの全取得
export const fetchDatabase = async () => {
  try {
    const { data } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .order("created_at");
    return data;
  } catch (error) {
    console.error(error);
  }
};

type InsertProps = Pick<Database, "title" | "memo" | "state" | "user_id">;

// データの追加
export const addSupabaseData = async ({
  title,
  memo,
  state,
  user_id,
}: InsertProps) => {
  try {
    await supabase.from(TABLE_NAME).insert({ title, memo, state, user_id });
  } catch (error) {
    console.error(error);
  }
};

export const addSpabaseUserData = async (uid: string) => {
  await supabase.from("next-app-userList").select;
};
