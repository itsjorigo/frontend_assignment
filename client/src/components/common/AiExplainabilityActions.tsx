import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // ✅ import toast
import axios from "axios";

interface AiActionsProps {
    borrowerId: string;
}

const AiExplainabilityActions: React.FC<AiActionsProps> = ({ borrowerId }) => {
    const handleAction = async (
        action: "request-documents" | "send-valuer" | "approve"
    ) => {
        let url = `/api/borrowers/${borrowerId}/`;
        if (action === "request-documents") url += "request-documents";
        if (action === "send-valuer") url += "send-valuer";
        if (action === "approve") url += "approve";

        try {
            const res = await axios.post(url);
            toast.success(res.data.message); // simpler toast usage
        } catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex flex-col gap-2 mt-3">
            <Button variant="secondary" onClick={() => handleAction("request-documents")}>
                Request Documents
            </Button>
            <Button variant="secondary" onClick={() => handleAction("send-valuer")}>
                Send to Valuer
            </Button>
            <Button variant="default" onClick={() => handleAction("approve")}>
                Approve
            </Button>
        </div>
    );
};

export default AiExplainabilityActions;
