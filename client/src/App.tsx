// src/App.tsx
import Header from "@/components/layout/Header.tsx";
import BorrowerPipeline from "@/components/layout/BorrowerPipeline.tsx";
import { AppProvider } from "./context/AppContext";
import BorrowerDetail from "@/components/layout/BorrowerDetail.tsx";
import BrokerOverview from "@/components/layout/BrokerOverview.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "sonner";


export default function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
                <AppProvider>
                    <Toaster />
                    <div className="min-h-screen bg-gray-50">
                        <Header/>

                        <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                            <BorrowerPipeline/>
                            <BorrowerDetail />
                            <BrokerOverview />
                        </main>
                    </div>
                </AppProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
