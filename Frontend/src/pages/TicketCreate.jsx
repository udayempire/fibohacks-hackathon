import { ArrowLeft } from "lucide-react";
import { Appbar } from "../Components/Appbar";
import { Link } from "react-router-dom";
import { Input } from "../Components/ui/Input";
import { Button } from "../Components/ui/Button";

export const TicketCreate = () => {
    return (
        <div className="relative w-full">
            {/* Appbar fixed at the top */}
            <div className="fixed top-0 left-0 w-full">
                <Appbar />
            </div>

            {/* Main content */}
            <div className="mt-12 p-8 flex items-center gap-4">
                <Link to="/">
                    <ArrowLeft className="" />
                </Link>
                <h1 className="text-3xl font-bold text-blue-900">Create a New Event</h1>
            </div>

            {/* Event Details Section */}
            <div className="px-10 md:px-24">
                <h2 className="p-5 text-3xl font-semibold">Event Details</h2>
                <div className="flex w-full max-w-sm gap-4 ">
                    <Input label="Event Title *" placeholder="Enter the name of your event" />
                    <Input label="Event Category *" placeholder="Enter Your Event Category" />
                </div>
            </div>

            {/* Date & Time Section */}
            <div className="px-10 md:px-24 mt-8">
                <h2 className="p-5 text-3xl font-semibold">Date & Time</h2>
                <div className="flex w-full max-w-sm gap-4">
                    <Input label="Start Date *" placeholder="DD/MM/YY" />
                    <Input label="Start Time *" placeholder="12:00 AM" />
                    <Input label="End Time *" placeholder="12:00 AM" />
                </div>
            </div>

            {/* Location Section */}
            <div className="px-10 md:px-24 mt-8">
                <h2 className="p-5 text-3xl font-semibold">Location</h2>
                <div className="flex w-full max-w-6xl gap-4">
                    <Input label="Event State *" placeholder="Enter the state where your event will be held" />
                    <Input label="Pincode *" placeholder="Enter the pincode for the event location" />
                    <Input label="Exact Location *" placeholder="Enter the detailed location (address or venue)" />
                </div>
            </div>

            {/* Additional Information Section */}
            <div className="px-10 md:px-24 mt-8">
                <h2 className="p-5 text-3xl font-semibold">Additional Information</h2>
                <div className="grid w-full max-w-sm gap-4">
                    <textarea
                        className="w-full h-32 p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add any additional details about the event"
                    />
                </div>
            </div>
            <div className="flex justify-center p-5">
                <Button text={"Next"} variant="dark"   />
            </div>
        </div>
    );
};
