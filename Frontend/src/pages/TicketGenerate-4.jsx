import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Appbar } from "../Components/Appbar"
export const TicketGenerate4 = () => {
    return <div>
        <div>
            <div className="fixed top-0 left-0 w-full">
                <Appbar />
            </div>
        </div>
        <div className="mt-12 p-8 flex items-center gap-4">
            <Link to={-1}>
                <ArrowLeft className="" />
            </Link>
            <div>
                <h1 className="text-3xl font-bold text-blue-900">Event Title</h1>
                <p className="text-gray-500">Nearly There! Check if Everything is correct</p>
            </div>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center">
                <img src="dark-web.png" className="w-full  max-w-6xl" alt="" />
            </div>
            <div className="px">
                <h1 className="text-xl font-semibold text-blue-900">Event Title</h1>
            </div>

            <div>
                <div>
                    <h1>Date and Time</h1>
                    <p>Tuesday,17</p>
                    <p>12:00 PM</p>
                </div>
                <div>
                    <h1>Ticket Information</h1>
                    <p>Ticket Type: Price Ticket</p>
                </div>
            </div>
            <div>
                <h1>Location</h1>
                <h1>Address</h1>
            </div>
            <div>
                <h1>Hosted by - RGPV SOIT</h1>
            </div>
            <h1>Event Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perspiciatis iure? Maxime amet quisquam corporis est perspiciatis quaerat at sequi dolor culpa reiciendis cum modi non eius, quis labore repellat quas asperiores consequuntur ducimus tempora unde rem neque minima. Magni impedit ex, voluptates nihil id deserunt! Exercitationem illum nisi harum?</p>
        </div>
    </div>
}