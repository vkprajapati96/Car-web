import React from 'react'
import Header from '../components/Header'
import MyListing from './components/MyListing'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from '@/components/Footer'
import Inbox from './components/Inbox'


function Profile() {
    return (
        <div>
            <Header />
            <div className='px-10 md:px-20 my-10'>
                <Tabs defaultValue="my-listing" className="w-full">
                    <TabsList className="w-full flex justify-start border bg-zinc-50 rounded-[10px]  gap-3">
                        <TabsTrigger value="my-listing">My Listing</TabsTrigger>
                        <TabsTrigger value="inbox">Inbox</TabsTrigger>
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                    </TabsList>
                    <TabsContent value="my-listing">
                        <MyListing />
                    </TabsContent>
                    <TabsContent value="inbox"><Inbox/></TabsContent>
                    <TabsContent value="profile">Profile tab.</TabsContent>
                </Tabs>


               
            </div>
            <Footer/>
        </div>
    )
}

export default Profile