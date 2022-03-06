import { Link } from "react-router-dom"

const CharacterCard = ({e}) =>{
    return(
        <div>
            <Link to='/character_detail/:id'>            
                <img
                    src={e.image} alt="img not found"
                />
                <div>Name:    {e.name}</div>
            </Link>
        </div>
    )
}

export default CharacterCard