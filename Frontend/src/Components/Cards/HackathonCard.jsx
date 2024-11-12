import { Button } from "../ui/Button"
import { useNavigate } from "react-router-dom"
export const HackathonCard = ({data}) => {
    const navigate = useNavigate()
    return <div
    className="cursor-pointer" onClick={() => {
        navigate("/event-info")
    }} 
    >
        <div className="flex p-1 bg-gray-100 rounded-lg w-full max-w-xl items-center drop-shadow-xl">
            <img src={data.coverImg} className="w-72 h-52 rounded-lg " alt="" />
            <div className="space-y-4 px-6 py-2">
                <div className="flex gap-2 items-center">
                    <p className="border-r border-gray-400 px-2 py-1">Dec 16</p>
                    <p>Gurgaon,India</p>
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <div className="flex gap-4">
                    <div className="p-2 bg-gray-300 rounded-md">{data.mode}</div>
                    <div className="p-2 bg-gray-300 rounded-md">{data.status}</div>
                    <div className="p-2 bg-gray-300 rounded-md">{data.interested}+</div>
                </div>
                <div className="p-2">
                <Button text={"Apply Now"} variant="dark" className="bg-purple-600 hover:bg-purple-700 text-white w-full max-w-auto" />
                </div>
            </div>
        </div>
    </div>
}