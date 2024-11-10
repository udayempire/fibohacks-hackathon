import { Link } from "react-router-dom"
import { Button } from "./ui/Button"
export const Appbar = () => {
    return <div className="bg-blue-950 drop-shadow-lg">
        <div className="flex justify-between items-center p-2 px-4 op">
            <h1 className="text-white">Eventify</h1>
            <div className="flex gap-8 text-white font-semibold">
                <Link to="/">Home</Link>
                <Link to={"/events"}>Events</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </div>

            <div className="flex gap-2">
                <Button text={"Logout"}></Button>
                <Button text={"Create Event"}></Button>
            </div>
        </div>
    </div>
}