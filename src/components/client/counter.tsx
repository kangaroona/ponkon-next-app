"use client";
import { useEffect, useState } from "react";
import { trpc } from "@/app/_trpc/client";
export const Coutner = ({ children }: { children: React.ReactNode }) => {
  const [number, setNumber] = useState(0);
  const { data } = trpc.hello.useQuery({ text: "hello" });

  useEffect(() => {
    setNumber(number + 1);
  }, []);
  return (
    <div className="w-full flex flex-col gap-2 border-white border-2 rounded-md">
      {children}
      <p>text:{data?.greeting?.title}</p>
      <p>number:{number}</p>
    </div>
  );
};
