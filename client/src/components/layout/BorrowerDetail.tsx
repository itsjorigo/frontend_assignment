import React from 'react';
import {useAppContext} from "@/context/AppContext.tsx";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AlertTriangle} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";


// Mock borrower details
const borrowerData: Record<string, any> = {
    "1": {
        id: "1",
        name: "Alice Johnson",
        email: "alice@example.com",
        phone: "555-1234",
        loanAmount: 250000,
        status: "In Review",
        employment: "Software Engineer",
        existingLoan: "Car Loan - $15,000",
        creditScore: 710,
        sourceOfFunds: "Salary Savings",
        risk: "High Debt-to-Income Ratio",
    },
    "2": {
        id: "2",
        name: "Bob Smith",
        email: "bob@example.com",
        phone: "555-5678",
        loanAmount: 40000,
        status: "New",
        employment: "Teacher",
        existingLoan: "None",
        creditScore: 680,
        sourceOfFunds: "Savings + Part-time work",
        risk: "Income Inconsistency",
    },
};

const BorrowerDetail: React.FC = () => {
    const { activeBorrower } = useAppContext();
    const borrower = activeBorrower ? borrowerData[activeBorrower] : null;

    if (!borrower) {
        return (
            <Card className="rounded-2xl shadow-md p-6 flex">
                <h1 className="font-semibold">Borrower Details</h1>
                <p className="font-gray-200">Select a borrower to see details</p>
            </Card>
        );
    }

    return (
        <Card className="flex flex-col gap-4rounded-2xl shadow-md p-6">
            <h1 className="font-semibold">Borrower Detail</h1>
            <CardHeader className="border border-black rounded-lg p-5">
                <CardTitle className="flex items-center justify-between">
                    <div className="overflow-hidden ">
                        <table className="w-full text-sm">
                            <tbody>
                            <tr className="border-b">
                                <td className="p-2 text-gray-500">Name</td>
                                <td className="p-2 font-bold">{borrower.name}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2 text-gray-500">Email</td>
                                <td className="p-2">{borrower.email}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2 text-gray-500">Phone</td>
                                <td className="p-2">{borrower.phone}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2 text-gray-500">Loan Amount</td>
                                <td className="p-2 font-semibold text-md">
                                    ${borrower.loanAmount.toLocaleString()}
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 text-gray-500">Status</td>
                                <td className="p-2 font-semibold text-md">
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
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 border border-black rounded-lg pb-4">
                {/* AI Explainability */}
                <div className="">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="ai-explainability">
                            <AccordionTrigger className="font-semibold">AI Explainability</AccordionTrigger>
                            <AccordionContent className="space-y-2">
                                <div className="flex items-center text-red-600 gap-2">
                                    <AlertTriangle className="w-4 h-4"/>
                                    <span>{borrower.risk}</span>
                                </div>
                                <div className="flex flex-col gap-2 mt-3">
                                    <Button variant="secondary">Request Documents</Button>
                                    <Button variant="secondary">Send to Valuer</Button>
                                    <Button variant="default">Approve</Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* Loan Summary */}
                <section>
                    <h3 className="font-semibold mb-2">Loan Summary</h3>
                    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                        <tbody>
                            <tr className="border-b">
                                <td className="p-2 text-gray-500 w-1/2">Employment</td>
                                <td className="p-2 font-medium">{borrower.employment}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2 text-gray-500">Existing Loan</td>
                                <td className="p-2 font-medium">{borrower.existingLoan}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2 text-gray-500">Credit Score</td>
                                <td className="p-2 font-medium">{borrower.creditScore}</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-gray-500">Source of Funds</td>
                                <td className="p-2 font-medium">{borrower.sourceOfFunds}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>


                {/* Risk Signal */}
                <section className="flex flex-col gap-3 bg-red-50 border border-red-200 p-4 rounded-xl">
                    <div className="flex items-center text-red-700">
                        <AlertTriangle className="w-4 h-4"/>
                        <span className="ml-2 text-sm">{borrower.risk}</span>
                    </div>
                    <div>
                        <Button className="text-sm flex items-center h-8" variant="destructive">
                            Escalate to Credit Committee
                        </Button>
                    </div>
                </section>
            </CardContent>
        </Card>
    );
};

export default BorrowerDetail;