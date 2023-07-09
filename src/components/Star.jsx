
import {AiFillStar} from 'react-icons/ai'
export default function Star({num}) {
    return Array(1).fill(0).map((_,idx)=>idx+1).map((el,idx)=>(
      <AiFillStar key={idx}/>
    ));
}
