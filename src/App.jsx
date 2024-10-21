import { useState } from 'react'
import './App.css'
import Watch from './componants/Watch/Watch'
import { useEffect } from 'react'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect( () => {
    fetch('watches.json')
    .then((res) => res.json())
    .then((data) => setWatches(data))
  },[])
  // const watches = [
  //   {id: 1, name: 'Apple', price: 200},
  //   {id: 2, name: 'Asus', price: 200},
  //   {id: 3, name: 'MI', price: 200},
  // ]

  // const  watches = [
  //   { id: 1, name: "Apple Watch Series 8", price: 399 },
  //   { id: 2, name: "Samsung Galaxy Watch 6", price: 299 },
  //   { id: 3, name: "Garmin Forerunner 255", price: 449 },
  //   { id: 4, name: "Fitbit Sense 2", price: 279 },
  //   { id: 5, name: "Polar Vantage M2", price: 299 }
  // ];

  return (
    <>
      <h1>Import Export Basic</h1>
      {
        watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
