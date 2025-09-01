export type AppContextType = {
    activeBorrower: string | null;
    setActiveBorrower: (id: string | null) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
};