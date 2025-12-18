import { HydrateClient } from "@/lib/trpc/server";

import ClientPage from "./client-page";

export default async function Page() {
  return (
    <HydrateClient>
      <ClientPage />
    </HydrateClient>
  );
}
