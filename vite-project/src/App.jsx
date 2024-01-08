import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, Routes, Route} from 'react-router-dom'
import Dog from './Dog/'
import DogForm from './dogform'
import SearchBar from './SearchBar'
import AllPlayers from './components/AllPlayers'

import './App.css'

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const fetchThings = async () => {
      const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310-FTB-ET-WEB-FT/players')
      setDogs(data.data.players)
    }
    fetchThings()
  },[])

  const create = async (newDog) => {
    const {data} = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2310-FTB-ET-WEB-FT/players/', newDog)
    console.log(response)
    setDogs([...dogs, data.players])
    console.log(data.players)
  }

  const deleteDog = async (dog) => {
    await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FTB-ET-WEB-FT/players/${dog.id}`)
    setDogs(dogs.filter((_dog) => {return _dog.id !== dog.id }))
    navigate('/')
    console.log(response)
  }

  return (
   <div>
    <h1>Puppy bowl</h1>
    <h4>Click a name to view personal information</h4>
    
    <ul>
      {
        dogs.map((dog) => {
          return(
            <li key={dog.id}>
              <Link to={`/players/${dog.id}`}>
                {dog.name}
              </Link>
              </li>
            
          )
        })
      }
    </ul>
    
    <Routes>
      <Route path='/players/:id' element={<Dog dogs={dogs} deleteDog={deleteDog}/>}/>
      
    </Routes>
    <h3>Create new player:</h3>
    <DogForm create={create}/>
    <h4>Search Players:</h4>
    <SearchBar dogs={dogs}/>
    
   </div>
  )
}

export default App
