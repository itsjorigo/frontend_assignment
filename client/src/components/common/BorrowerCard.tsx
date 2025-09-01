import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type {Borrower} from "@/types/borrower.type.ts";

interface BorrowerCardProps {
    borrower: Borrower;
    onClick: () => void;
}

const BorrowerCard: React.FC<BorrowerCardProps> = ({ borrower, onClick }) => {
    return (
        <Card
            className="p-3 flex justify-between cursor-pointer hover:bg-gray-50 transition rounded-xl"
            onClick={onClick}
        >
            <div className="flex justify-between items-start">
                {/* Left side: name + loan type stacked */}
                <div>
                    <p className="font-medium">{borrower.name}</p>
                    <p className="text-sm text-gray-500">{borrower.loan_type}</p>
                </div>

                {/* Right side: amount */}
                <p className="font-semibold text-sm text-right">
                    ${borrower.amount.toLocaleString()}
                </p>
            </div>

            {/* Badge below full width */}
            <Badge
                variant="secondary"
                className={
                    borrower.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : borrower.status === "In Review"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                }
            >
                {borrower.status}
            </Badge>
        </Card>
    );
};

export default BorrowerCard;