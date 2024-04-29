"use client";
import { useState } from "react";
export default function Page({ number }: { number: number }) {
  console.log(number);
  const [count, setCount] = useState(number);
  return (
    <div>
      lite component count: <span className="text-red-500">{count}</span>
      <div className="flex my-2">
        <button className="w-10 h-10 bg-slate-400 rounded" onClick={() => setCount(count + 1)}>
          add
        </button>
      </div>
    </div>
  );
}
