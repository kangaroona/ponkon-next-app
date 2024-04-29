"use client";
import { useState } from "react";
import { createToDoDirectly } from "./actions";
export default function Input({ value }: { value: string }) {
  const [val, setVal] = useState(value);
  const handle = async () => {
    await createToDoDirectly(val);
    setVal("");
  };
  return (
    <div className="flex gap-2">
      <input className="w-40" type="text" name="todo" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handle}>Submit</button>
    </div>
  );
}
