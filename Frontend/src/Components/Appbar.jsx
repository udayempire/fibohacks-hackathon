import { Link } from "react-router-dom"
import { Button } from "./ui/Button"
import { useNavigate } from "react-router-dom"
export const Appbar = () => {
    const navigate = useNavigate();
    return <div className="bg-blue-950 drop-shadow-lg">
        <div className="flex justify-between items-center p-2 px-4 op">
            <div className="text-white cursor-pointer"><img src="logo.svg" alt=""  onClick={()=>{
                navigate("/")
            }} /></div>
            <div className="flex gap-8 text-white font-semibold">
                <Link to="/">Home</Link>
                <Link to={"/events"}>Events</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </div>

            <div className="flex gap-2">
                <Button text={"Logout"} 
                onClick={()=>{
                    navigate("/signin")
                }}
                ></Button>
                <Button text={"Create Event"} onClick={()=>{
                    navigate("/ticket-generate-1")
                }}></Button>
            </div>
        </div>
    </div>
}