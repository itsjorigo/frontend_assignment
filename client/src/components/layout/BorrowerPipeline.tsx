import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BorrowerCard from "@/components/common/BorrowerCard.tsx";
import {useAppContext} from "@/context/AppContext.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Card} from "@/components/ui/card.tsx";

// Mock borrowers
const borrowers = {
    new: [
        { id: "1", name: "Alice Johnson", loanType: "Home Loan", amount: 250000, status: "New" },
        { id: "2", name: "Bob Smith", loanType: "Auto Loan", amount: 40000, status: "New" },
    ],
    review: [
        { id: "3", name: "Charlie Lee", loanType: "Personal Loan", amount: 15000, status: "In Review" },
    ],
    approved: [
        { id: "4", name: "Dana White", loanType: "Business Loan", amount: 120000, status: "Approved" },
    ],
};

const BorrowerPipeline: React.FC = () => {
    const { setActiveBorrower } = useAppContext();

    return (

        <Card className="flex flex-col gap-4 shadow-md p-6">
                <h1 className="font-semibold">Borrower Pipeline</h1>

                {/* Tabs */}
                <Tabs defaultValue="new" className="w-full border border-black p-5 rounded-lg">
                    <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="new">New</TabsTrigger>
                        <TabsTrigger value="review">In Review</TabsTrigger>
                        <TabsTrigger value="approved">Approved</TabsTrigger>
                    </TabsList>

                    {/* New Borrowers */}
                    <TabsContent value="new" className="flex flex-col gap-2">
                        {borrowers.new.map((b) => (
                            <BorrowerCard key={b.id} borrower={b} onClick={() => setActiveBorrower(b.id)}/>
                        ))}
                    </TabsContent>

                    {/* In Review */}
                    <TabsContent value="review" className="flex flex-col gap-2">
                        {borrowers.review.map((b) => (
                            <BorrowerCard key={b.id} borrower={b} onClick={() => setActiveBorrower(b.id)}/>
                        ))}
                    </TabsContent>

                    {/* Approved */}
                    <TabsContent value="approved" className="flex flex-col gap-2">
                        {borrowers.approved.map((b) => (
                            <BorrowerCard key={b.id} borrower={b} onClick={() => setActiveBorrower(b.id)}/>
                        ))}
                    </TabsContent>
                </Tabs>

                {/* Radio Section */}
                <div className="border border-black p-5 rounded-lg">
                    <p className="text-xs font-semibold text-gray-500 mb-2">F-SANATISED ACTIVE</p>
                    <RadioGroup defaultValue="option1">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option1" id="r1"/>
                            <Label htmlFor="r1">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option2" id="r2"/>
                            <Label htmlFor="r2">Option 2</Label>
                        </div>
                    </RadioGroup>
                </div>
        </Card>
    );
};

export default BorrowerPipeline;