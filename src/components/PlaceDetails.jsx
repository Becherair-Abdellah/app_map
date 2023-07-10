
import { MdLocationPin } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import Star from './Star';
import { useMemo, useState } from 'react';
export default function PlaceDetails({ data}) {
    const { awards } = data;
    // console.log(data.cuisine ? data.cuisine.length !== 0 && data.cuisine !== undefined )
    // console.log(data.cuisine)
    // using useMemo Hook to improve the performance 
    const starMemo = useMemo(() => (
        <span>
            {data.rating ? <Star numstar={Math.floor(Number(data.rating))} /> : ''}
        </span>
    ), [])
    return (
        <div className='mb-5 mt-5'>
            <div>
                <img src={data?.photo ? data.photo.images.large.url : '../../public/rdef.jpg'} alt="" />
            </div>
            <div className='p-3 bg-white shadow-xl'>
                <h1 className='text-gray-800 text-xl font-semibold mb-2' >{data?.name ? data.name : 'UNkowne'}</h1>
                <div className='rating' >
                    {starMemo}
                    <span>out of {data.num_reviews}</span>
                </div>
                <div className='flex justify-between text-gray-700 mb-2'>
                    <span>price</span>
                    <span>{data?.price_level}</span>
                </div>
                {/* ranking  */}
                <div className='flex justify-between text-gray-700 mb-2 items-center'>
                    <span>Rankimg</span>
                    <span>{data?.ranking}</span>
                </div>
                {/* certefication  */}
                {data.awards?.length !== 0 ? <div className='' >
                    {data?.awards?.map((award) => {
                        <span>
                            <img src={award.images.small} alt={award.display_name} />
                        </span>
                    })}
                </div> : ''}
                {/* tags */}
                {data?.cuisine ? <div className="flex flex-wrap gap-2 mb-4 items-center" >
                    {data?.cuisine?.map(({ name }, i) => (
                        <span key={i} className='px-2 py-1 text-white bg-gray-400 rounded-2xl' >{name}</span>
                    ))}
                </div> : ''}
                {/* address  */}
                {data?.address && (<div className='flex justify-between text-gray-700 mb-3 items-center'>
                    <span><MdLocationPin size={25} /></span>
                    <span>{data.address}</span>
                </div>)}
                {/* phone  */}
                {data?.phone && (<div className='flex justify-between text-gray-700 mb-3 items-center'>
                    <span><BiPhoneCall /></span>
                    <span>{data.phone}</span>
                </div>)}
                {/* buttons */}
                <div className='flex gap-2 text-gray-500' >
                    <button onClick={() => window.open(data.web_url, '_blank')}>Trip Advisor</button>
                    <button onClick={() => window.open(data.website, '_blank')}>Website </button>
                </div>
            </div>
        </div>



    )
}
