"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Providers({ children }: React.PropsWithChildren) {
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") setIsBrowser(true);
  }, []);

  const [client] = React.useState(() => new QueryClient());

  if (!isBrowser) return null;
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
