// src/context/AppContext.tsx
import React, { createContext, useContext, useState } from "react";
import type {AppContextType} from "@/types/appContext.type.ts";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeBorrower, setActiveBorrower] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string>("pipeline");

    return (
        <AppContext.Provider value={{ activeBorrower, setActiveBorrower, activeTab, setActiveTab }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within AppProvider");
    return context;
};
