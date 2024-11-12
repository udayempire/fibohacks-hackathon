import { Link } from "react-router-dom"
import { ArrowLeft, Bookmark, CalendarDaysIcon, Clock, Share2 } from "lucide-react"
import { Appbar } from "../Components/Appbar"
import { Button } from "../Components/ui/Button"
export const TicketGenerate4 = () => {
    return <div className="bg-zinc-50 h-full">
        <div>
            <div className="absolute top-0 left-0 w-full">
                <Appbar />
            </div>
        </div>
        <div className="mt-12 p-8 flex items-center gap-4 ">
            <Link to={-1}>
                <ArrowLeft className="" />
            </Link>
            <div>
                <h1 className="text-3xl font-bold text-blue-900">Event Title</h1>
                <p className="text-gray-500">Nearly There! Check if Everything is correct</p>
            </div>
        </div>

        {/* Ticket  */}

        <div className="flex flex-col mx-auto w-full max-w-4xl gap-4 border px-6 py-4 rounded-md  ">
            <div className="flex flex-col items-center justify-center">
                <img src="dark-web.png" className="w-full  max-w-7xl" alt="" />
            </div>
            <div className="px">
                <h1 className="text-2xl font-bold text-blue-900">Event Title</h1>
            </div>
            <div className="flex justify-between">
                <div className="space-y-3">
                    <div className="space-y-3">
                        <h1 className="font-semibold text-lg">Date and Time</h1>
                        <p className="flex gap-2 items-center"> <span> <CalendarDaysIcon /> </span> 17, Tuesday</p>
                        <p className="flex gap-2 items-center"> <span> <Clock /> </span> 12:00 PM</p>
                    </div>
                    <div className="text-blue-600 cursor-pointer" >+Add to Calendar</div>
                </div>
                <div>
                    <h1 className="font-semibold text-lg">Ticket Information</h1>
                    <p className="text-md">Ticket Type: Free/Paid</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <h1 className="font-semibold text-lg" >Location</h1>
                    <h1>New Delhi Near Greater Noida,India-472948</h1>
                </div>
                <div>
                    <h1 className="font-semibold text-lg" >Hosted by</h1>
                    <p>RGPV SOIT</p>
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="font-semibold text-lg">Event Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perspiciatis iure? Maxime amet quisquam corporis est perspiciatis quaerat at sequi dolor culpa reiciendis cum modi non eius, quis labore repellat quas asperiores consequuntur ducimus tempora unde rem neque minima. Magni impedit ex, voluptates nihil id deserunt! Exercitationem illum nisi harum?</p>
            </div>
            <div className="flex justify-center  gap-2 mt-2 ">
                <Button text={
                    <div className="flex gap-2 items-center">
                        <Bookmark />
                        <p>Save for Later</p>
                    </div>
                } />
                <Button text={
                    <div className="flex gap-2 items-center">
                        <Share2 />
                        <p>Publish</p>
                    </div>

                } variant="dark" />

            </div>
        </div>
    </div>
}