import { brandsRouter } from "./router/brands";
import { categoriesRouter } from "./router/categories";
import { clothesRouter } from "./router/clothes";
import { userRouter } from "./router/user";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
   user: userRouter,
   clothes: clothesRouter,
   categories: categoriesRouter,
   brands: brandsRouter,
});

export type AppRouter = typeof appRouter;
