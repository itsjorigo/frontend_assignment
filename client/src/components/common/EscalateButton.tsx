import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";

interface EscalateButtonProps {
    borrowerId: string;
}

const EscalateButton: React.FC<EscalateButtonProps> = ({ borrowerId }) => {
    const [loading, setLoading] = useState(false);

    const handleEscalate = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`/api/borrowers/${borrowerId}/escalate`);
            toast.success(res.data.message);
        } catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            variant="destructive"
            onClick={handleEscalate}
            disabled={loading}
        >
            {loading ? "Escalating..." : "Escalate to Credit Committee"}
        </Button>
    );
};

export default EscalateButton;
