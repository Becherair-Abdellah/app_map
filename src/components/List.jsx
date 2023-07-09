import React, { useState, useEffect } from 'react'
import PlaceDetails from './PlaceDetails';
export default function List({data}) {
    const [type, SetType] = useState('restaurants');
    const [Rating, setRating] = useState(0);
    console.log(type)
    return (
        <div className='p-4' >
            <h1 className='text-3xl leading-10 font-[400] text-blue-700' >Restaurants, Hotels & Attractions around you </h1>
            <div className='flex gap-3 items-center mt-5'>

                <form>
                    <label htmlFor="" className='block mb-1 text-gray-500 text-sm'>Type</label>
                    <select name="" id="" onChange={(e) => { SetType(e.target.value) }} className='p-2 cursor-pointer outline-none'>
                        <option value="restaurants">restaurants</option>
                        <option value="hotels">hotels</option>
                        <option value="attractions">attractions</option>
                    </select>
                </form>

                <form>
                    <label htmlFor="" className='block mb-1 text-gray-500 text-sm' >Rating</label>
                    <select name="" id="" onChange={(e) => { setRating(e.target.value) }} className='p-2 cursor-pointer  outline-none' >
                        <option value={0}>All</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </form>
            </div>
            {/* places  */}
            <div className=''>
                {data?.map((place, i) => {
                    return <PlaceDetails data={place} key={i} />
                })}
            </div>
        </div>
    )
}
