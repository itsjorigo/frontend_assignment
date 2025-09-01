import React from 'react';
import {Bell, HelpCircle, Search} from "lucide-react";

const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between p-4 border-b bg-white shadow-s">
            <h1 className="text-xl font-bold">DemoApp</h1>
            <div className="flex gap-4">
                <Search className="w-5 h-5 text-gray-600 cursor-pointer"/>
                <HelpCircle className="w-5 h-5 text-gray-600 cursor-pointer"/>
                <Bell className="w-5 h-5 text-gray-600 cursor-pointer"/>
            </div>
        </div>
    );
};

export default Header;