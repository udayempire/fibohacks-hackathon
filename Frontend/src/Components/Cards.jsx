export const Cards = ({ events }) => {
    return <div>
        <div className="flex flex-col bg-white rounded-lg">
            <img src={events.coverImg} alt="" />
            <div className="flex gap-4 p-4">
                <div className="">
                    <h1 className="text-blue-800 font-semibold text-center *:" >{events.month}</h1>
                    <p className="font-bold">{events.date}</p>

                </div>
                <div className="">
                    <h2 className="font-semibold">{events.title}</h2>
                    <p className="text-[rgba(90,90,90,1)]" >{events.location}</p>
                    <p className="text-[rgba(90,90,90,1)]">{events.time}</p>
                    <div className="flex justify-between text-[rgba(90,90,90,1)]">
                        <p>{events.cost}</p>
                        <p>{events.interested}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
}