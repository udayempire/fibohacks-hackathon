import { ArrowLeft, IndianRupeeIcon, LucideTicket } from "lucide-react";
import { Appbar } from "../Components/Appbar";
import { Link } from "react-router-dom";
import { Input } from "../Components/ui/Input";
import { Button } from "../Components/ui/Button";
import { useNavigate } from "react-router-dom";

export const TicketGenerate3 = () => {
    const navigate = useNavigate()
    return (
        <div className="relative w-full">
            {/* Appbar fixed at the top */}
            <div className="fixed top-0 left-0 w-full">
                <Appbar />
            </div>

            {/* Main content */}
            <div className="mt-12 p-8 flex items-center gap-4">
                <Link to={-1}>
                    <ArrowLeft className="" />
                </Link>
                <h1 className="text-3xl font-bold text-blue-900">Ticketing</h1>
            </div>

            {/* Event Details Section */}
            <div className="px-10 md:px-24">
                <h2 className="py-5 text-3xl font-semibold">What Type of Event are you running</h2>
                <div className="flex w-full max-w-sm gap-4 ">
                    <Button text={
                        <div className="flex flex-col items-center gap-3">
                            <IndianRupeeIcon/>
                            <div className="space-y-1">
                                <h1 className="font-semibold text-md *:">Paid Ticket</h1>
                                <p className="text-gray-600">User needs to purchase my Ticket</p>
                            </div>
                        </div>
                    } />
                    <Button text={
                        <div className="flex flex-col items-center gap-3">
                            <LucideTicket/>
                            <div className="space-y-1">
                                <h1 className="font-semibold text-md *:">Paid Ticket</h1>
                                <p className="text-gray-600">User needs to purchase my Ticket</p>
                            </div>
                        </div>
                    } />
                </div>
            </div>

            {/* Date & Time Section */}
            <div className="px-10 md:px-24 mt-8">
                <h2 className="py-5 text-3xl font-semibold">What Tickets are you Selling</h2>
                <div className="flex w-full max-w-lg gap-4">
                    <Input label="Ticket Name" placeholder="Ticket Name Eg - First Tier" />
                    <Input label="Ticket Price (INR) " type="Number"  placeholder="0.00 INR" />
                </div>
            </div>


            <div className="flex justify-center p-5 items-center gap-2  ">
                <div >
                    <Button text={"Save and Continue"} variant="dark" onClick={() => {
                        navigate("/ticket-generate-2")
                    }} />
                </div>
                <div className="text-blue-950 text-lg cursor-pointer " onClick={() => {
                    navigate(-1)
                }}>
                    Go Back
                </div>
            </div>
        </div>
    );
};
