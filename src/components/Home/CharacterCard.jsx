import { Link } from "react-router-dom"
import style from "./CharacterCard.module.css"

const CharacterCard = ({e}) =>{
    return(
        <div className={style.container}>
            <Link className={style.link} to={'/character_detail/' + e.id}>            
                <img className={style.img}
                    src={e.image} alt="img not found"
                />
                <h3 className={style.tittle}>{e.name}</h3>
            </Link>
        </div>
    )
}

export default CharacterCard