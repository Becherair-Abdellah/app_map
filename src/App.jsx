import './index.css'
import { GetData } from './api'
import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'
import { useState,useEffect } from 'react'
import Star from './components/Star'
function App() {

  let [places, setPlaces] = useState([]);;
  useEffect(() => {
      // GetData()
      //     .then((data) => {
      //         setPlaces(data)

      //     })
  },[]);
  return (
    <>
    
    <Header/>
    <div className='grid grid-cols-myCol'>
      <List className="col-25" data={places} />
      <Map className="col-75 " />
      <Star/>
      <TestNum data={Typenum}/>
    </div>
    </>
  )
}

export default App
