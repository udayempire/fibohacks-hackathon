import { Appbar } from "../Components/Appbar";
import { Categories } from "../Components/Categories";
import { Searchbar } from "../Components/ui/Searchbar";
import { ToggleSwitch } from "../Components/toggleSwitch";
import { exploreCategories, popularEvents, jobData } from "../data/fakeData";
import { Cards } from "../Components/Cards"
import { useState, useEffect } from "react"
import { Button } from "../Components/ui/Button";
import { JobCard } from "../Components/JobCard";
export const Home = () => {
    const [time, setTime] = useState({
        hours: 15,
        minutes: 2,
        seconds: 9
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                if (prevTime.seconds > 0) {
                    return { ...prevTime, seconds: prevTime.seconds - 1 }
                } else if (prevTime.minutes > 0) {
                    return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
                } else if (prevTime.hours > 0) {
                    return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
                }
                return prevTime
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])


    return (
        <div className="relative w-full">
            <div
                className="w-full h-[400px] bg-cover relative flex items-center justify-center bg-center flex-col opacity-85"
                style={{ backgroundImage: "url('/navbar-bg.png')" }}>
                <div className="absolute top-0 left-0 w-full">
                    <Appbar />
                </div>
                <div className="text-3xl mt-10 ">
                    <p className="font-extrabold text-white text-center">
                        Discover <span className="text-yellow-400">Exciting Events</span> happening near you and
                    </p>
                    <p className="font-extrabold text-white text-center">around the world.</p>
                </div>
                <div className="mt-10">
                    <Searchbar />
                </div>
            </div>

            <div>
                <h1 className="text-center my-4 text-3xl text-blue-950 font-semibold">Explore Categories</h1>
                <div className="flex gap-16 p-5 justify-center cursor-pointer">
                    {exploreCategories.map((data, index) => (
                        <Categories key={index} categories={data} />
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex justify-center w-full max-w-3xl w-fullmbg-green-500" >
                    <ToggleSwitch />
                </div>
            </div>

            {/* Popular Events  */}
            <h1 className="text-3xl font-semibold px-20 mt-10">Popular Events in India</h1>
            <div className="px-16 py-5 ">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5 bg-orange-100 rounded-sm">
                    {popularEvents.slice(0, 6).map((data, index) => (
                        <Cards key={index} events={data} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center w-full">
                <Button text={" See More"} variant="dark" className="w-96 rounded-full font-semibold bg-gray-200 text-black hover:bg-gray-300" />
            </div>
            {/* rgpv fibohack  */}
            <div className="flex p-16  ">
                <div ><img src="welcomeFibohack.png" alt="" /></div>
                <div className="flex flex-col gap-4 w-screen rounded-r-2xl" style={{ background: "rgba(52, 122, 99, 1)" }}>
                    <div className="flex gap-8 mt-10  px-48 justify-center mr-24 items-center">
                        {/* date */}
                        <div className="p-2 border-dashed rounded-lg border-white border-2 h-16 w-24 flex flex-col justify-center items-center" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
                            <h1 className="text-white font-semibold text-xl">Nov</h1>
                            <p className="font-semibold">22-01</p>
                        </div>
                        {/* time  */}
                        <div className="flex gap-10  p-4 border-2 rounded-lg border-white justify-center items-center bg-green-600 text-white" style={{ background: "rgba(255, 255, 255, 0.1)" }}
                        >
                            <div className="flex flex-col items-center">
                                <h1 className="text-6xl font-semibold">{String(time.hours).padStart(2, '0')}</h1>
                                <p className="text-2xl font-extralight">HOURS</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className="text-6xl font-semibold">{String(time.minutes).padStart(2, '0')}</h1>
                                <p className="text-2xl font-extralight">MINUTES</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className="text-6xl font-semibold">{String(time.seconds).padStart(2, '0')}</h1>
                                <p className="text-2xl font-extralight">SECONDS</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        <Button text="SOIT, RGPV" className="w-48" />
                        <Button text={"OFFLINE"} className="w-48" />
                        <Button text={"500+ Participating Students"} className="w-54" />
                    </div>
                    <div className="flex justify-center  ">
                        <Button text={"Apply Now"} className="w-[670px] bg-green-800 border-0 text-white font-semibold" />
                    </div>
                </div>
            </div>

            {/* best online event  */}

            <h1 className="font-semibold px-20 text-3xl ">Discover Best of Online Events</h1>
            <div className="px-16 py-5 ">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5 bg-pink-50 rounded-sm">
                    {popularEvents.slice(0, 3).map((data, index) => (
                        <Cards key={index} events={data} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center w-full">
                <Button text={" See More"} variant="dark" className="w-96 rounded-full font-semibold bg-gray-200 text-black hover:bg-gray-300" />
            </div>
            {/* // Featured Opportunites*/}
            <h1 className="text-3xl font-semibold px-20 mt-10"> <span className="font-semibold text-blue-700">Featured</span> <span className="text-yellow-500">Opportunties</span>  </h1>

            <div className="px-16 py-5 ">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5 bg-orange-100 rounded-sm"
                    style={{ background: "rgba(247, 245, 255, 1)" }}>
                    {jobData.slice(0, 9).map((data, index) => (
                        <JobCard key={index} jobs={data} />
                    ))}
                </div>
                <div className="flex justify-center w-full">
                    <Button text={" See More"} variant="dark" className="w-96 rounded-full font-semibold bg-gray-200 text-black hover:bg-gray-300 mt-5" />
                </div>
            </div>
        </div>
    );
};
