import { ArrowLeft } from "lucide-react";
import { Appbar } from "../Components/Appbar";
import { Link } from "react-router-dom";
import { Button } from "../Components/ui/Button";
import { useNavigate } from "react-router-dom";

export const TicketGenerate2 = () => {
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
                <h1 className="text-3xl font-bold text-blue-900">Event Banner</h1>
            </div>



            {/* Additional Information Section */}
            <div className="px-10 md:px-24 mt-8">
                <h2 className="p-1 py-5 text-3xl font-semibold">Additional Information</h2>
                <div className="grid w-full max-w-lg gap-4 text-gray-500">
                    <input type="file" className="border bg-zinc-50 p-4 px-8 rounded-md"  />
                    <p>Feature Image must be at least 1170 pixels wide by 504 pixels high.</p>
                    <p>Valid file formats: JPG, GIF, PNG.</p>
                </div>
            </div>
            <div className="flex justify-center p-5 items-center gap-2  ">
                <div >
                    <Button text={"Save and Continue"} variant="dark" onClick={() => {
                        navigate("/ticket-generate-3")
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
