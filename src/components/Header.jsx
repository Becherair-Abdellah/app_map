import {BsSearch} from 'react-icons/bs'
export default function Header() {
  return (
    <div className='bg-blue-700 py-3'>
      <div className='flex justify-between items-center w-[90%] mx-auto' >
        <h1 className='text-2xl text-white font-semibold' >
            TravelAdvisor
        </h1>
        <div className='flex items-center gap-3' >
            <h1 className='text-white text-lg ' >explore new places</h1>
            <div className='relative' >
                <BsSearch className='absolute left-[10px] top-1/2 -translate-y-1/2 text-white stroke-[.8]' size={20} /> 
                <input type="text" placeholder='Search' className='p-2 rounded-lg bg-trs text-white outline-none pl-9' />
            </div>
        </div>
      </div>
    </div>
  )
}
