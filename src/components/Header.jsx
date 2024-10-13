import { UserButton, useUser } from "@clerk/clerk-react";
import carlogo from "../assets/carLogo.svg"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react";



function Header(){
    const { user, isSignedIn} = useUser();
    return(
        <>
        <div className="flex justify-between items-center shadow-md p-4">
            <img src={carlogo} alt="" width={150} height={50}/>

            <ul className="hidden md:flex gap-10 font-medium">
                <Link to={'/'}>
                <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
                </Link>
                <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
                <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
                <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</li>
            </ul>
            {isSignedIn ? 
                <div className="flex items-center gap-5">
                    <UserButton/>
                    <Link to={'/profile'}>
                    <Button className="bg-primary text-white rounded-[20px]">Submit Listing</Button>
                    </Link>
                </div>
                :
                    <div className="flex gap-2">
                        <Button className="bg-primary text-white rounded-[20px]">Submit Listing</Button>
                        <SignInButton>
                        <Button className="bg-primary text-white rounded-[20px]">SignUP/Login</Button>
                        </SignInButton>
                    </div>
            }
            
        </div>
        </>
    )
}

export default Header;