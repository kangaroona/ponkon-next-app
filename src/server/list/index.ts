import { z } from "zod";
import { publicProcedure } from "../trpc";
interface postItem {
  userId: number;
  id: number;
  title: string;
  body?: string;
}
const getData = async (): Promise<postItem> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data[0];
};
const listAPI = {
  hello: publicProcedure.input(z.object({ text: z.string().nullish() })).query(async ({ input }) => {
    return {
      greeting: (await getData()) || {
        title: "hello",
        id: 1,
        userId: 1,
      },
      text: input.text,
    };
  }),
};
export default listAPI;
