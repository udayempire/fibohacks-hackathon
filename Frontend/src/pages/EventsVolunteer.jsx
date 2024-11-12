import { Appbar } from "../Components/Appbar";
import { Footer } from "../Components/Footer";
import { Searchbar } from "../Components/ui/Searchbar";
import { Filter } from "../Components/Filters";
import { jobData } from "../data/fakeData";
import { JobCard } from "../Components/Cards/JobCard";
import { SelectTypes } from "../Components/selectTypes";
export const EventsVolunteer = () => {
    return (
        <div className="relative w-full">
            {/* Header Section */}
            <div
                className="w-full h-[300px] bg-cover relative flex items-center justify-center bg-center flex-col opacity-85"
                style={{
                    backgroundImage:
                        "url('/volunteer-bg.png')"
                }}
            >
                <div className="absolute top-0 left-0 w-full">
                    <Appbar />
                </div>
                <div className="text-3xl mt-10">
                    <p className="font-extrabold text-white text-center text-5xl">
                        CONNECT , CONTRIBUTE AND <span className="text-blue-700">CREATE IMPACT</span> 
                    </p>
                </div>
                <div className="mt-10 bg-purple-600 text-white px-48  py-2 rounded-full drop-shadow-xl uppercase text-xl font-semibold ">
                    Apply For Volunteering Now 
                </div>
            </div>
            <div className="flex bg-zinc-100">

                {/* Left Panel */}
                <Filter />
                {/* Right Panel  */}
                <div className="px-10 py-2">
                    <div className="space-y-4 mt-2">
                        <Searchbar/>
                        <h1 className="text-3xl font-bold pb-10">Dont Miss Networking With Us</h1>
                    </div>
                    <SelectTypes/>
                    <div className="grid grid-cols-2 gap-4">
                        {jobData.map((data, index) => (
                            <JobCard key={index} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            {/* Footer Section */}
            <Footer />
        </div>
    );
};
