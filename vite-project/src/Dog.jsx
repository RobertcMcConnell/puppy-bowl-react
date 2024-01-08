import {useParams} from "react-router-dom"

const dog = ({dogs, deleteDog}) => {
    const params = useParams()
    const id = params.id*1
    
    const dog = dogs.find((dog) =>{
        return id === dog.id
    })

    if(!dog){
        return null
    }
    return(
        <div>
            <h2>Player info - {dog.name} - Team ID- {dog.teamId}</h2>
            <button>Player info</button>
            <button onClick={() => {deleteDog(dog)}}>Delete player</button>
        </div>
    )
}

export default dog