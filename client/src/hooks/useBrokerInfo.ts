import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const USE_MOCK_API = true;

export interface BrokerInfo {
    name: string;
    deals: number;
    approval_rate: string;
    pending: number;
}

// Mock data
const mockBrokerInfo: BrokerInfo = {
    name: "Robert Turner",
    deals: 16,
    approval_rate: "75%",
    pending: 7660,
};

export const useBrokerInfo = (id: string) => {
    return useQuery<BrokerInfo>({
        queryKey: ["broker-info", id],
        queryFn: async () => {
            if (USE_MOCK_API) {
                // Simulate network delay
                await new Promise((resolve) => setTimeout(resolve, 500));
                return mockBrokerInfo;
            } else {
                const res = await axios.get(`/api/broker/${id}`);
                return res.data;
            }
        },
        enabled: !!id, // only fetch if id exists
    });
};
