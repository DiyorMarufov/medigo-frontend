import { Suspense, type ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SuspenseLoading from "../shared/components/suspense-loading";

const client = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={client}>
            <Suspense fallback={<SuspenseLoading />}>{children}</Suspense>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default AppProvider;
