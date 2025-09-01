import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type {Borrower} from "@/types/borrower.type.ts";

export const USE_MOCK_API = true;

export interface BorrowerPipelineResponse {
    new: Borrower[];
    in_review: Borrower[];
    approved: Borrower[];
}

// Mock data
const mockBorrowerPipeline: BorrowerPipelineResponse = {
    new: [
        {
            id: "1",
            name: "Sarah Dunn",
            loan_type: "Home Loan",
            amount: 300000,
            status: "Renew",
        },
        {
            id: "3",
            name: "Lisa Carter",
            loan_type: "Home Loan",
            amount: 450000,
            status: "New",
        },
    ],
    in_review: [
        {
            id: "2",
            name: "Alan Matthews",
            loan_type: "Personal Loan",
            amount: 20000,
            status: "In Review",
        },
    ],
    approved: [
        {
            id: "4",
            name: "Sabrina Carpenter",
            loan_type: "Home Loan",
            amount: 356000,
            status: "Approved",
        },
    ],
};

export const useBorrowerPipeline = () => {
    return useQuery<BorrowerPipelineResponse>({
        queryKey: ["borrowerPipeline"],
        queryFn: async () => {
            if (USE_MOCK_API) {
                // Simulate network delay
                await new Promise((resolve) => setTimeout(resolve, 500));
                return mockBorrowerPipeline;
            } else {
                const res = await axios.get("/api/borrowers/pipeline");
                return res.data;
            }
        },
    });
};
