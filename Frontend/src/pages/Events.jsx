import { Appbar } from "../Components/Appbar";
import { Footer } from "../Components/Footer";
import { Searchbar } from "../Components/ui/Searchbar";
import { Filter } from "../Components/Filters";
import { popularEvents } from "../data/fakeData";
import { Cards } from "../Components/Cards/Cards";
import { SelectTypes } from "../Components/selectTypes";
export const Events = () => {
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
                <div className="text-3xl mt-10">
                    <p className="font-extrabold text-white text-center">
                        Explore a world of events. Find what excites you!
                    </p>
                </div>
                <div className="mt-10">
                    <Searchbar />
                </div>
            </div>
            <div className="flex ">

                {/* Left Panel */}
                <Filter />
                {/* Right Panel  */}
                <div className="px-10 py-2">
                    <div>
                        <h1 className="text-3xl font-bold pb-10">Most Exciting Events</h1>
                    </div>
                    <SelectTypes />
                    <div className="grid grid-cols-3 gap-4">
                        {popularEvents.map((data, index) => (
                            <Cards key={index} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            {/* Footer Section */}
            <Footer />
        </div>
    );
};
