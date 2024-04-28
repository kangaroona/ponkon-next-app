import React from "react";

const Page = () => {
  return (
    <div className="mx-4 my-2 flex items-center justify-between space-x-4">
      <a href="#" className="flex bg-blue-500 p-4 text-wite hover:bg-red-500 rounded">
        start
      </a>
      <a href="#" className="flex bg-blue-500 p-4 text-wite hover:bg-red-500 border-solid border-2 rounded">
        stop
      </a>
    </div>
  );
};

export default Page;
