import { Button } from '@/components/ui/button';


function OwnersDetails({ carDetail }) {
    return (
        <div className='p-10 border rounded-xl shadow-md mt-5'>
            <h2 className='font-medium text-2xl mb-3'>Owner Deals</h2>
            <img src={carDetail?.userImage} className='w-[100px] h-[100px] rounded-full' alt="" />
            <h2 className='mt-2 font-bold text-xl'>{carDetail?.userName}</h2>
            <h2 className='mt-2 text-gray-500'>{carDetail?.createdBy}</h2>
            <Button className="bg-primary text-white rounded-[5px] w-full mt-7 text-md" size="lg"
            > Message Owner</Button>

        </div>
    )
}

export default OwnersDetails