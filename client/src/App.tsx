// src/App.tsx
import Header from "@/components/layout/Header.tsx";
import BorrowerPipeline from "@/components/layout/BorrowerPipeline.tsx";
import { AppProvider } from "./context/AppContext";
import BorrowerDetail from "@/components/layout/BorrowerDetail.tsx";
import BrokerOverview from "@/components/layout/BrokerOverview.tsx";
// import { AppProvider } from "./context/AppContext";

export default function App() {
    return (
        <AppProvider>
            <div className="min-h-screen bg-gray-50">
                <Header/>

                <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    <BorrowerPipeline/>
                    <BorrowerDetail />
                    <BrokerOverview />
                </main>
            </div>
        </AppProvider>
    );
}
