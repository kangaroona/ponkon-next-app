import React from "react";

type Props = {
  title: string;
  desc?: string;
};

export default function Card({ title, desc }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h1>title:{title}</h1>
      <h2>desc:{desc}</h2>
    </div>
  );
}
