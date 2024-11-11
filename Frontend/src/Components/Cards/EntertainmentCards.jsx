export const Entertainment = ({data}) => {
    return <div>
        <img src="" alt="" />
        <div className="flex">
            <div>
                <p className="font-semibold text-purple-800">{data.month}</p>
                <h1 className="text-xl font-bold">{data.date}</h1>
            </div>
            <div>
                <div>
                    {data.title}
                </div>
                <div className="text-gray-500">
                    {data.desc}
                </div>
            </div>
        </div>
    </div>
}