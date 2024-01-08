import { useState } from "react"

const DogForm = ({create}) => {
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        const newDog = {
            name
            
            
        }
        create(newDog)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => {setName(event.target.value)}}
                    />
                
                   
                    <button type="submit">Submit</button>
                </label>
            </form>
        </div>
    )
}

export default DogForm