import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BorrowerCard from "@/components/common/BorrowerCard.tsx";
import {useAppContext} from "@/context/AppContext.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Card} from "@/components/ui/card.tsx";
import {useBorrowerPipeline} from "@/hooks/useBorrowerPipeline.ts";

const BorrowerPipeline: React.FC = () => {
    const { setActiveBorrower } = useAppContext();
    const { data, isLoading, isError } = useBorrowerPipeline();

    if (isLoading) {
        return (
            <Card className="flex flex-col gap-4 shadow-md p-6">
                <h1 className="font-semibold">Borrower Pipeline</h1>
                <p className="text-gray-500">Loading borrowers...</p>
            </Card>
        );
    }

    if (isError || !data) {
        return (
            <Card className="flex flex-col gap-4 shadow-md p-6">
                <h1 className="font-semibold">Borrower Pipeline</h1>
                <p className="text-red-500">Failed to load borrower pipeline.</p>
            </Card>
        );
    }

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
                        {(data?.new ?? []).length > 0 ? (
                            data.new.map((b) => (
                                <BorrowerCard
                                    key={b.id}
                                    borrower={b}
                                    onClick={() => setActiveBorrower(b.id)}
                                />
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm">No new borrowers</p>
                        )}
                    </TabsContent>

                    {/* In Review */}
                    <TabsContent value="in_review" className="flex flex-col gap-2">
                        {(data?.in_review ?? []).length > 0 ? (
                            data.in_review.map((b) => (
                                <BorrowerCard
                                    key={b.id}
                                    borrower={b}
                                    onClick={() => setActiveBorrower(b.id)}
                                />
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm">No borrowers in review</p>
                        )}
                    </TabsContent>

                    {/* Approved */}
                    <TabsContent value="approved" className="flex flex-col gap-2">
                        {(data?.approved ?? []).length > 0 ? (
                            data.approved.map((b) => (
                                <BorrowerCard
                                    key={b.id}
                                    borrower={b}
                                    onClick={() => setActiveBorrower(b.id)}
                                />
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm">No approved borrowers</p>
                        )}
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