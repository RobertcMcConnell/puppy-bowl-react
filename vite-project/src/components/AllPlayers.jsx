

function AllPlayers() {
  
  return (
   <div>
    
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
   </div>
  )
}

export default AllPlayers