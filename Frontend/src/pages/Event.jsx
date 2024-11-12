import { Appbar } from "../Components/Appbar";
import { Button } from "../Components/ui/Button";
import { Clock, CalendarDaysIcon } from "lucide-react";

export const Event = () => {
    return (
        <div className="relative w-full ">
            {/* Header Section */}
            <div
                className="w-full h-[300px] bg-cover relative flex items-center justify-center bg-center flex-col opacity-85"
                style={{
                    background:
                        "linear-gradient(179.92deg, #2B293D 2.91%, #9747FF 23.1%, #FFFFFF 99.93%)",
                }}
            >
                <div className="absolute top-0 left-0 w-full">
                    <Appbar />
                </div>

                <div className="flex mt-[500px] flex-col gap-8 w-full max-w-5xl mx-auto px-4 md:px-8">
                    <div>
                        <img
                            src="event.png"
                            alt="Event"
                            className="mx-auto mt-80 h-80 rounded-md"
                        />

                        <div className="mt-5 flex flex-col gap-4">
                            <div className="flex gap-4 justify-center">
                                <Button text="Apply Now" />
                                <Button text="Join Volunteer" variant="dark" />
                            </div>
                            <h1 className="text-4xl font-extrabold underline underline-offset-8 text-center">
                                Fibbonacci 1.0 by RGPV Bhopal
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-full px-4">
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                            {/* Date and Time Section */}
                            <div className="space-y-2">
                                <h1 className="font-semibold text-lg">Date and Time</h1>
                                <p className="flex gap-2 items-center">
                                    <CalendarDaysIcon />
                                    17, Tuesday
                                </p>
                                <p className="flex gap-2 items-center">
                                    <Clock />
                                    12:00 PM
                                </p>
                                <div className="text-blue-600 cursor-pointer">+Add to Calendar</div>
                            </div>

                            {/* Hosted By Section */}
                            <div className="flex flex-col gap-2 items-center">
                                <h1 className="font-semibold text-lg">Hosted by</h1>
                                <p>RGPV SOIT</p>
                                <div className="flex gap-2">
                                    <Button text="Contact Us" />
                                    <Button text="Follow" variant="dark" />
                                </div>
                            </div>
                        </div>

                        {/* Event Description */}
                        <div className="space-y-2 bg-slate-200 p-4 rounded-md mb-4">
                            <h1 className="font-semibold text-lg ">Event Description</h1>
                            <p>

                                Build for web3. Innovate the future.
                                This year, CoinDCX is taking the excitement to unprecedented heights as we The Premier Multi-Chain Multi-Protocol Hackathon ✨
                                The ultimate platform where the Web3 community unites from all corners of India and beyond, both in-person and virtually, to facilitate collaboration, innovation, and knowledge sharing in the Web3 space. The canvas is yours, the possibilities are endless, and the future is waiting.
                                What do we have in store for you? 🎁
                                🌍500+ Developers, Countless Possibilities!
                                This year, CoinDCX is pushing boundaries like never before.With over 500 developers converging at theMarriott, Bengaluru, prepare to be part of history in the making.Collaborate and exchange ideas with like-minded builders who share your passion for pioneering change.
                                💡Insights for Tomorrow
                                Immerse yourself in riveting discussions, keynotes, and fireside chats with the industrys most influential leaders, entrepreneurs, and disruptors.
                                Network with people building and disrupting standards in the industry.
                                Gain unparalleled insights into the realms of Web3 and explore the limitless potential of decentralized landscapes.
                                🛠Craft, Collaborate, Conquer
                                Whether you're a coding maestro working solo or a dynamic team with a shared vision, seize the opportunity to build on the chain of your choice.
                                With a total of$100k in prize moneyup for grabs, your ingenuity is your greatest asset.
                                Create something that resonates with the spirit of Web3 and elevate your chances of victory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
