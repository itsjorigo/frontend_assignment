import React, {useState} from 'react';
import {Card, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CheckCircle, Mail, MessageSquare, Phone} from "lucide-react";
import {Toggle} from "@/components/ui/toggle.tsx";

import {useBrokerInfo} from "@/hooks/useBrokerInfo.ts";
import { useOnboardingWorkflow } from "@/hooks/useOnboardingWorkflow";

const BrokerOverview: React.FC = () => {
    const [assistantEnabled, setAssistantEnabled] = useState(false);
    const { data: broker, isLoading: brokerLoading, isError: brokerError } = useBrokerInfo("1");
    const { data: workflow, isLoading: workflowLoading, isError: workflowError } = useOnboardingWorkflow();

    if (brokerLoading || workflowLoading) {
        return (
            <Card className="rounded-2xl shadow-md p-6 flex items-center justify-center">
                <p className="text-gray-500">Loading broker overview...</p>
            </Card>
        );
    }

    if (brokerError || workflowError || !broker || !workflow) {
        return (
            <Card className="rounded-2xl shadow-md p-6">
                <p className="text-red-500">Failed to load broker information</p>
            </Card>
        );
    }

    return (
        <Card className="rounded-2xl shadow-md p-6">
            <h1 className="font-semibold">Broker Overview</h1>

            <Card className="border border-black p-5 rounded-lg">
                {/* Broker Info */}
                <h1 className="font-semibold">{broker.name}</h1>
                <CardContent>
                    {/* Stats */}
                    <div className="grid grid-cols-3 text-center space-y-4">
                        <div>
                            <p className="text-xl font-bold">{broker.deals}</p>
                            <p className="text-sm text-gray-500">Deals</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">{broker.approval_rate}</p>
                            <p className="text-sm text-gray-500">Approval Rate</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">${broker.pending.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">Pending</p>
                        </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex gap-2 justify-center">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Phone className="w-4 h-4"/> Call
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Mail className="w-4 h-4"/> Email
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4"/> Chat
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border border-black p-5 rounded-lg">
                    <h1 className="font-semibold mb-2">Onboarding Workflow</h1>
                    <ol className="space-y-2">
                        {workflow.steps.map((step, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <CheckCircle
                                    className={`w-5 h-5 ${
                                        idx < 3 ? "text-green-500" : "text-gray-300"
                                    }`} // first 3 steps completed
                                />
                                <span className={`${idx < 3 ? "line-through text-gray-500" : ""}`}>
                  {step}
                </span>
                            </li>
                        ))}
                    </ol>
            </Card>

            <Card className="border border-black p-5 rounded-lg">
                <p className="font-medium">E Ardsassist</p>
                    <Toggle
                        pressed={assistantEnabled}
                        onPressedChange={(state) => setAssistantEnabled(state)}
                    />
            </Card>
        </Card>
    );
};

export default BrokerOverview;