import { CheckBox } from "./ui/checkBox"
export const Filter = () => {
    return <div className="py-6 px-10 space-y-10 w-full max-w-xs border-r">
        <div className="space-y-10">
            <h1 className="text-lg font-bold">Filters</h1>

            {/* Price Filter */}
            <div className="space-y-3 border-b pb-6">
                <h2 className="font-semibold">Price</h2>
                <CheckBox label="Free" />
                <CheckBox label="Paid" />
            </div>

            {/* Date Filter */}
            <div className="space-y-3 border-b pb-6">
                <h1 className="font-semibold">Date</h1>
                <CheckBox label="Today" />
                <CheckBox label="Tomorrow" />
                <CheckBox label="This Week" />
                <CheckBox label="This Month" />
                <CheckBox label="Upcoming Months" />
            </div>

            {/* Category Filter */}
            <div className="space-y-3 border-b pb-6">
                <h1 className="font-semibold">Category</h1>
                <CheckBox label="Adventure Travel" />
                <CheckBox label="Art Exhibition" />
                <CheckBox label="Auctions and Fundraiser" />
                <CheckBox label="Beer Festivals" />
                <CheckBox label="Benefit Concerts" />
            </div>
            {/* Format  */}
            <div className="space-y-3 ">
                <h1 className="font-semibold">Format</h1>
                <CheckBox label="Community Engagement" />
                <CheckBox label="Concerts and Performances" />
                <CheckBox label="Conferences" />
                <CheckBox label="Experential Events" />
                <CheckBox label="Festivals and Fairs" />
            </div>
        </div>
    </div>


}