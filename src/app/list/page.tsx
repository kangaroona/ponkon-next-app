import React from "react";

const Page = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", { cache: "no-store" });
  const data = await res.json();
  const url: string = data[0]?.url ?? "";
  return (
    <>
      <div className="mx-4 my-2 flex items-center justify-between space-x-4">
        <a href="#" className="flex bg-blue-500 p-4 text-wite hover:bg-red-500 rounded">
          start
        </a>

        <a href="#" className="flex bg-blue-500 p-4 text-wite hover:bg-red-500 border-solid border-2 rounded">
          stop
        </a>
      </div>
      <div className="w-full px-4 py-4 flex flex-col items-center justify-center">
        <img src={url} width="300" alt="cat" />
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    </>
  );
};

export default Page;
