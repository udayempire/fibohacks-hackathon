export const Cards = ({ data }) => {
    return <div>
        <div className="flex flex-col bg-white rounded-lg drop-shadow-xl">
            <img src={data.coverImg} alt="" />
            <div className="flex gap-4 p-4">
                <div className="">
                    <h1 className="text-blue-800 font-semibold text-center *:" >{data.month}</h1>
                    <p className="font-bold">{data.date}</p>

                </div>
                <div className="">
                    <h2 className="font-semibold">{data.title}</h2>
                    <p className="text-[rgba(90,90,90,1)]" >{data.location}</p>
                    <p className="text-[rgba(90,90,90,1)]">{data.time}</p>
                    <div className="flex justify-between text-[rgba(90,90,90,1)]">
                        <p>{data.cost}</p>
                        <p>{data.interested}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
}