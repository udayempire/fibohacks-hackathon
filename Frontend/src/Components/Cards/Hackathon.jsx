import { Button } from "../ui/Button"

export const HackathonCard = ({HackathonData}) => {
    return <div>
        <div className="flex p-1 bg-gray-100 rounded-lg w-full max-w-xl items-center">
            <img src="popularEvent.png" className="w-72 h-52 rounded-lg " alt="" />
            <div className="space-y-4 px-6 py-2">
                <div className="flex gap-2 items-center">
                    <p className="border-r border-gray-400 px-2 py-1">Dec 16</p>
                    <p>Gurgaon,India</p>
                </div>
                <h1 className="text-xl font-bold">ETH Salvador 2024</h1>
                <div className="flex gap-4">
                    <div className="p-2 bg-gray-300 rounded-md">Online</div>
                    <div className="p-2 bg-gray-300 rounded-md">Open</div>
                    <div className="p-2 bg-gray-300 rounded-md">250+</div>
                </div>
                <div className="p-2">
                <Button text={"Apply Now"} className="bg-purple-600 text-white w-full max-w-auto" />

                </div>
            </div>
        </div>
    </div>
}