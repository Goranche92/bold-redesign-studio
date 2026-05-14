import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/site/LandingPage";
import { me } from "@/data/personal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: me.siteTitle },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
