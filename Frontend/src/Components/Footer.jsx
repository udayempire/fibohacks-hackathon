import { Link } from "react-router-dom"
import { Button } from "./ui/Button"
import { CalendarPlus, LogIn } from "lucide-react"
export const Footer = () => {
    return <div>
        <div className="grid grid-cols-5 p-10 bg-purple-700 text-gray-300"
            style={{ background: "linear-gradient(-225deg, #4c2d7a 0%, #7053c4 53%, #4b3b98 100%)" }}>
            <div className="space-y-3">
                <h1 className="text-xl font-semibold text-white">Company Info</h1>
                <div className="flex flex-col gap-1">
                    <Link className="hover:underline underline-offset-4">About Us</Link>
                    <Link className="hover:underline underline-offset-4">Contact Us</Link>
                    <Link className="hover:underline underline-offset-4">Carrers</Link>
                    <Link className="hover:underline underline-offset-4">FAQs</Link>
                    <Link className="hover:underline underline-offset-4">Terms of Service</Link>
                    <Link className="hover:underline underline-offset-4">Privacy Policy</Link>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-xl font-semibold text-white">Help</h1>
                <div className="flex flex-col gap-1">
                    <Link className="hover:underline underline-offset-4">Account Support</Link>
                    <Link className="hover:underline underline-offset-4">Listing Events</Link>
                    <Link className="hover:underline underline-offset-4">Event Ticketing</Link>
                    <Link className="hover:underline underline-offset-4">Jobs</Link>
                </div>
            </div>
            <div className="space-y-3 gap-1">
                <h1 className="text-xl font-semibold text-white">Categories</h1>
                <div className="flex flex-col gap-1">
                    <Link className="hover:underline underline-offset-4">Concerts and Gigs</Link>
                    <Link className="hover:underline underline-offset-4">Festivals and Lifesyles</Link>
                    <Link className="hover:underline underline-offset-4">Bussiness and Networking</Link>
                    <Link className="hover:underline underline-offset-4">Foods & Drinks</Link>
                    <Link className="hover:underline underline-offset-4">Performing Arts</Link>
                    <Link className="hover:underline underline-offset-4">Sports & Outdoors</Link>
                    <Link className="hover:underline underline-offset-4">Exhibitions</Link>
                    <Link className="hover:underline underline-offset-4">Workshops and Conferences & Classes</Link>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-xl font-semibold text-white">Follow us</h1>
                <div className="flex flex-col gap-1">
                    <Link className="hover:underline underline-offset-4">Facebook</Link>
                    <Link className="hover:underline underline-offset-4">Instagram</Link>
                    <Link className="hover:underline underline-offset-4">Twitter</Link>
                    <Link className="hover:underline underline-offset-4">Youtube</Link>
                </div>
            </div>
            <div className="space-y-4 ">
                <Button
                    text={
                        <div className="flex justify-center items-center gap-2 w-full max-w-sm">
                            <CalendarPlus className=" h-4 w-4" />
                            <span>Create Event</span>
                        </div>
                    }
                /><br/>
                <Button text={
                    <div className="flex justify-center items-center gap-2 w-[7rem]">
                        <LogIn className="h-4 w-4"/>
                        <span>Get Started</span>
                    </div>
                } />
            </div>
        </div>
    </div>
}