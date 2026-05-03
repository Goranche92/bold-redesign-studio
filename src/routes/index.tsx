import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/site/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Boldonse — Creative design studio" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
