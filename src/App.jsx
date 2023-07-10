import './index.css'
import { GetData } from './api'
import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'
import { useState,useEffect } from 'react'
function App() {
  let [places, setPlaces] = useState([]);
  const [isLoad,setIsLoad] = useState(false);
  const [type,setType] = useState('restaurants');
  const [placesFiltred,setPlacesFiltred] = useState([]);
  const [rating,setRating] = useState(0);
  useEffect(()=>{
    const myFiltred = places.filter((place)=>{
      return rating?place.rating > rating:place
    });
    setPlacesFiltred(myFiltred);
  console.log(myFiltred);
  console.log(placesFiltred); 
  },[rating])
  useEffect(() => {
    setIsLoad(true)
      GetData(type)
          .then((data) => {
              setPlaces(data)
              setIsLoad(false);
              setPlacesFiltred([]);

          })
  },[type]);
  console.log(placesFiltred);
  console.log(rating)
  return (
    <>
    
    <Header/>
    <div className='grid grid-cols-myCol'>
      <List className="col-25" data={placesFiltred.length?placesFiltred:places} isload={isLoad}
      type={type}
      setType={setType}
      rating={rating}
      setRating={setRating}
      
      />
      <Map className="col-75 " />
      
    </div>
    </>
  )
}

export default App
