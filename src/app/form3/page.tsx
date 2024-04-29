import { findToDos } from "./actions";
import AddToDoForm from "./form";

export default async function Page() {
  console.log(process.env.DB_HOST);
  const todos = await findToDos();
  return (
    <>
      <AddToDoForm />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
