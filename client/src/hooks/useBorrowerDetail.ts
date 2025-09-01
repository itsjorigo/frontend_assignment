import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const USE_MOCK_API = true; // Global toggle

export interface BorrowerDetailResponse {
    id: string;
    name: string;
    email: string;
    phone: string;
    loan_amount: number;
    status: string;
    employment: string;
    income: number;
    existing_loan: number;
    credit_score: number;
    source_of_funds: string;
    risk_signal: string;
    ai_flags: string[];
}

// Mock data
export const mockBorrowerDetails: Record<string, BorrowerDetailResponse> = {
    "1": {
        id: "1",
        name: "Sarah Dunn",
        email: "sarah.dunn@example.com",
        phone: "(355)123-4557",
        loan_amount: 300000,
        status: "Renew",
        employment: "Software Engineer at TechCorp",
        income: 95000,
        existing_loan: 120000,
        credit_score: 710,
        source_of_funds: "Salary",
        risk_signal: "High Debt-to-Income Ratio",
        ai_flags: [
            "Income Inconsistent with Bank statements",
            "High Debt-to-Income Ratio detected",
        ],
    },
    "2": {
        id: "2",
        name: "Alan Matthews",
        email: "alan.matthews@example.com",
        phone: "(355)987-6543",
        loan_amount: 20000,
        status: "In Review",
        employment: "Teacher at Springfield High",
        income: 45000,
        existing_loan: 5000,
        credit_score: 680,
        source_of_funds: "Salary + Savings",
        risk_signal: "Income Inconsistency",
        ai_flags: [
            "Income Inconsistent with Bank statements",
        ],
    },
    "3": {
        id: "3",
        name: "Lisa Carter",
        email: "lisa.carter@example.com",
        phone: "(355)555-2233",
        loan_amount: 450000,
        status: "New",
        employment: "Project Manager at BuildIt",
        income: 120000,
        existing_loan: 200000,
        credit_score: 720,
        source_of_funds: "Salary + Investments",
        risk_signal: "Missing Source of Funds declaration",
        ai_flags: [
            "High Debt-to-Income Ratio detected",
        ],
    },
    "4": {
        id: "4",
        name: "Sabrina Carpenter",
        email: "sabrina.carpenter@example.com",
        phone: "(355)666-7788",
        loan_amount: 356000,
        status: "Approved",
        employment: "Designer at Creative Studio",
        income: 90000,
        existing_loan: 100000,
        credit_score: 730,
        source_of_funds: "Salary + Freelance Projects",
        risk_signal: "No immediate risk",
        ai_flags: [],
    },
};

export const useBorrowerDetail = (id: string | null) => {
    return useQuery<BorrowerDetailResponse>({
        queryKey: ["borrowerDetail", id],
        enabled: !!id,
        queryFn: async () => {
            if (!id) throw new Error("No borrower ID provided");
            if (USE_MOCK_API) {
                await new Promise((resolve) => setTimeout(resolve, 500));
                return mockBorrowerDetails[id];
            } else {
                const res = await axios.get(`/api/borrowers/${id}`);
                return res.data;
            }
        },
    });
};