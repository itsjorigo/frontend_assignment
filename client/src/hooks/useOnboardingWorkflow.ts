import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const USE_MOCK_API = true;

export interface OnboardingWorkflowResponse {
    steps: string[];
}

// Mock data
const mockOnboardingWorkflow: OnboardingWorkflowResponse = {
    steps: [
        "Deal Intake",
        "IDV & Credit Check",
        "Document Upload",
        "AI Validation",
        "Credit Committee",
        "Approval & Docs",
        "Funder Syndication",
    ],
};

export const useOnboardingWorkflow = () => {
    return useQuery<OnboardingWorkflowResponse>({
        queryKey: ["onboarding-workflow"],
        queryFn: async () => {
            if (USE_MOCK_API) {
                // Simulate network delay
                await new Promise((resolve) => setTimeout(resolve, 500));
                return mockOnboardingWorkflow;
            } else {
                const res = await axios.get("/api/onboarding/workflow");
                return res.data;
            }
        },
    });
};
