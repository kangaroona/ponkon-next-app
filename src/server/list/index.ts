import { z } from "zod";
import { publicProcedure } from "../trpc";
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data[0];
};
const listAPI = {
  hello: publicProcedure.input(z.object({ text: z.string().nullish() })).query(async ({ input }) => {
    return {
      greeting: await getData(),
      text: input.text,
    };
  }),
};
export default listAPI;
