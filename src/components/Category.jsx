import { category } from "@/Shared/Data";
import { Link } from "react-router-dom";


function Category(){
    return(
        <>
        <div className="mt-40">
            <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-28">
                {category.map((category, index) => (
                    <Link to={'search/'+category.name} key={index}>
                    <div className="border rounded-[10px] p-3 flex flex-col items-center hover:shadow-xl cursor-pointer" key={index}>
                        <img  src={category.icon} width={50} height={50} alt="" />
                        <h2 className="font-bold">{category.name}</h2>
                    </div>
                    </Link>
                ))}
            </div>

        </div>
        </>
    )
}

export default Category;