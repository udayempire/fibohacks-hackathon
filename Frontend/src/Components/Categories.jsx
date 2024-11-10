export const Categories = ({ categories }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div>
                <img src={categories.img} alt={categories.label} className="w-32" />
            </div>
            <div className="text-center">
                {categories.label}
            </div>
        </div>
    );
};
