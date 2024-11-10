import { useState } from 'react';

export const ToggleSwitch = () => {
    const [activeTab, setActiveTab] = useState('Events');

    return (
        <div className="flex bg-yellow-400 rounded-full p-1 w-full">
            <button
                className={`flex-1 py-2 text-center rounded-full transition-all ${
                    activeTab === 'Events' ? 'bg-white text-black' : 'text-white'
                }`}
                onClick={() => setActiveTab('Events')}
            >
                Events
            </button>
            <button
                className={`flex-1 py-2 text-center rounded-full transition-all ${
                    activeTab === 'Volunteer Opportunities' ? 'bg-white text-black' : 'text-white'
                }`}
                onClick={() => setActiveTab('Volunteer Opportunities')}
            >
                Volunteer Opportunities
            </button>
        </div>
    );
};
