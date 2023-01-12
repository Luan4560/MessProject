import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { queryClient } from "./Study/ZustandApp/services/queryClient";
import { App } from "./App";
import { QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
