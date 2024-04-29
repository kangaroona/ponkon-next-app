"use client";

import { createToDoDirectly } from "./actions";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="w-20 bg-slate-400 rounded flex py-2 justify-center"
      onClick={async () => {
        const data = await createToDoDirectly("运动");
        console.log(data);
      }}
    >
      {children}
    </button>
  );
}
