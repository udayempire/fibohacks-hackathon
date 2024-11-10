import { Search } from "lucide-react";

export const Searchbar = () => {
  return (
    <div className="relative w-[600px]">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search Events, Categories, Location"
        className="pl-10 w-full p-3 rounded-3xl text-gray-700 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
};
