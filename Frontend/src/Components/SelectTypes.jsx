import { Button } from "./ui/Button"
import { useNavigate } from "react-router-dom"

export const SelectTypes = () => {
    const navigate = useNavigate()
    return <div className="p-4 flex gap-2">
        <Button text={"Adventure"}
            onClick={() => {
                navigate("/events")
            }}
        />
        <Button text={"Hackathons"}
            onClick={() => {
                navigate("/events/hackathons")
            }}
        />
        <Button text={"Volunteer Opportunities"}
            onClick={() => {
                navigate("/events/volunteer")
            }}
        />
        <Button text={"Entertainment"}
            onClick={() => {
                navigate("/events/entertainments")
            }}
        />
    </div>
}