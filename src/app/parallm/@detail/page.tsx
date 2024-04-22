"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Lite = dynamic(() => import("./Lite"));
export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col">
      Detail Page-{count}
      {count % 2 === 0 && <Lite />}
      <button className="w-10 h-10" onClick={() => setCount(count + 1)}>
        add
      </button>
    </div>
  );
}
