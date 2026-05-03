import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent() {
  return (
    <div className="min-h-screen bg-[#04070A] px-6 py-16 text-white">
      <h1 className="font-display text-2xl tracking-wide">Something went wrong</h1>
      <p className="mt-4 max-w-lg text-sm text-white/70">Please refresh the page or try again later.</p>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
