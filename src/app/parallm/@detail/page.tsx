import dynamic from "next/dynamic";

const Lite = dynamic(() => import("./Lite"), {
  loading: () => <p>Loading...</p>,
});
export default function Page() {
  const count = 0;
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold underline">Detail Page</h1>
      <Lite number={count} />
      <h2>count: {count}</h2>
    </div>
  );
}
