import { Appbar } from "../Components/Appbar";
import { Categories } from "../Components/Categories";
import { Searchbar } from "../Components/Searchbar";
import { exploreCategories } from "../data/fakeData";

export const Dashboard = () => {
    return (
        <div className="relative">
            <div
                className="w-full h-[400px] bg-cover relative flex items-center justify-center bg-center flex-col opacity-85"
                style={{ backgroundImage: "url('/navbar-bg.png')" }}
            >
                <div className="absolute top-0 left-0 w-full">
                    <Appbar />
                </div>
                <div className="text-3xl mt-10">
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
                <div className="flex gap-16 p-5 justify-center">
                {exploreCategories.map((data, index) => (
                    <Categories key={index} categories={data} />
                ))}

                </div>
            </div>
        </div>
    );
};
