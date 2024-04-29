import { Suspense } from "react";
import List from "./List";
export default async function Page() {
  //const res: number = await new Promise((resolve) => setTimeout(() => resolve(10), 2000));
  return (
    <div>
      <h1 className="text-xl font-bold underline">Team Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <List />
      </Suspense>
    </div>
  );
}
