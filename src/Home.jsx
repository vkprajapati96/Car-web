import { SignInButton } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchCar from "./components/MostSearchCar";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";


function Home(){
    return(
        <>
        
        {/* Header section  */}
        {/* <Button><SignInButton/></Button> */}
        <Header/>
        {/* Hero */}
        <Hero/>

        {/* Category */}
        <Category/>

        {/* Most search car */}
        <MostSearchCar/>

        {/* InfoSection  */}
        <InfoSection/>

        {/* Footer Section */}
        <Footer/>
        </>
    )
}

export default Home;