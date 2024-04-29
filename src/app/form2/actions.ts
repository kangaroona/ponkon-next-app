"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const data: string[] = ["阅读", "写作", "冥想"];

export async function findToDos(): Promise<string[]> {
  return data;
}

export async function createToDo(formData: FormData) {
  const todo = formData.get("todo") as string;
  data.push(todo);

  revalidatePath("/form2");
  return data;
}

export async function createToDoDirectly(value: string) {
  const form = new FormData();
  form.append("todo", value);
  return createToDo(form);
}
