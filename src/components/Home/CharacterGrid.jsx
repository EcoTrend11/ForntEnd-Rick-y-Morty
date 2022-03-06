import CharacterCard from "./CharacterCard"

const CharacterGrid = ({data}) =>{
    
    return(
        <div>
            { data.map( e => <CharacterCard e={e} key={e.id}/>)}
        </div>
    )
}

export default CharacterGrid