import { findToDos, createToDo } from "./actions";
import Button from "./Buttom";
import Input from "./Input";
export default async function Page() {
  const todos: string[] = await findToDos();
  return (
    <div className="flex flex-col w-full p-4 gap-2">
      <Input value="运动" />
      <Button>+运动</Button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
