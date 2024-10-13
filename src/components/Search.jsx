import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Separator } from "@radix-ui/react-select"
import { CiSearch } from "react-icons/ci";
import { CarMakers, Pricing } from "@/Shared/Data";
import { useState } from "react";
import { Link } from "react-router-dom";


function Search() {

    const [cars, setCars] = useState();
    const [make, setMake] = useState();
    const [price, setPrice] = useState();

    return (
        <>
            <div className="p-2 md:p- bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[50%]">
                <Select onValueChange={(value)=> setCars(value)}>
                    <SelectTrigger className="bg-white outline-none md:border-none w-full shadow-none text-lg">
                        <SelectValue placeholder="Cars" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="New">New Cars</SelectItem>
                        <SelectItem value="Used">Used Cars</SelectItem>
                        <SelectItem value="Certified Pre-Ownee">Certigied Pre-Owned Cars</SelectItem>
                    </SelectContent>
                </Select>|

        
                <Select onValueChange={(value) => setMake(value)}>
                    <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                        <SelectValue placeholder="Brands" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        {CarMakers.map((maker, index)=>(

                            <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>|


                <Select onValueChange={(value) => setPrice(value)}>
                    <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                        <SelectValue placeholder="Prices" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        {Pricing.map((price, index)=>(
                            <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Link to={'/search?cats='+cars+"&make="+make+"&price"+price}>
                <CiSearch className="text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer"/>
                </Link>
            </div>
        </>
    )
}

export default Search