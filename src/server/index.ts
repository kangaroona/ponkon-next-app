import { router } from "./trpc";
import listAPI from "./list";
export const appRouter = router({
  ...listAPI,
});

export type AppRouter = typeof appRouter;
