
import {AiFillStar} from 'react-icons/ai'
export default function Star({numstar}) {
  console.log(numstar)
    return Array(numstar).fill(0).map((_,idx)=>idx+1).map((el,idx)=>(
      <AiFillStar className='text-yellow-500' key={idx}/>
    ));
}
