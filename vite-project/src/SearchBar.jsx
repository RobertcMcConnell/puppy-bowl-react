import { useState } from "react"

const SearchBar = ({dogs}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredDogs = dogs.filter((dog) => {
        return dog.name.indexOf(searchTerm) !== -1
    })
    console.log(filteredDogs)

    return(
        <div>
            <label>
                <input 
                    type="text"
                    value={searchTerm}
                    OnChange={(event) => {setSearchTerm(event.target.value)}}
                />
            </label>
        </div>
    )
}

export default SearchBar