import CharacterCard from "./CharacterCard"
import style from "./CharacterGrid.module.css"

const CharacterGrid = ({data}) =>{
    
    return(
        <div className={style.character__container}>
            { data.map( e => <CharacterCard e={e} key={e.id}/>)}
        </div>
    )
}

export default CharacterGrid