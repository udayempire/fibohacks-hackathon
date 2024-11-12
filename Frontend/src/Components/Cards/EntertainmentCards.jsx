import { useNavigate } from "react-router-dom"
export const EntertainmentCards = ({data}) => {
    const navigate = useNavigate()
    return <div className="w-80  bg-zinc-50 cursor-pointer"
     onClick={() => {
        navigate("/event-info")
    }} 
    >
        <img src="/enter.png" alt="" className="w-full rounded-t-lg " />
        <div className="flex gap-2 p-4">
            <div className="p-2">
                <p className="font-semibold text-purple-800">{data.month}</p>
                <h1 className="text-xl font-bold">{data.date}</h1>
            </div>
            <div className="scale-y-2">
                <div>
                    {data.title}
                </div>
                <div className="text-gray-500">
                    {data.desc}
                </div>
            </div>
        </div>
    </div>
}