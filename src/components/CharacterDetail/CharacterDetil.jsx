import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios  from "axios"
import style from "./CharacterDetail.module.css"
const CharacterDetail = () =>{

    const { id } = useParams()
    const [detail, setDetail] = useState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async function (){
        let api = await axios.get("https://rickandmortyapi.com/api/character/" + id)
        let dataApi = api.data
        setDetail(dataApi)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(!detail){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div className={style.general_container}>
            <div className={style.container}>
                <div className={style.img__container}>
                    <img className={style.img}
                        src={detail.image}
                        alt="img not found"
                    />
                </div>
                <div className={style.detail__container}>
                    <div> Name : {detail.name}</div>
                    <div>Status : {detail.status} </div>
                    <div>Species : {detail.species}</div>
                    <div>Gender : {detail.gender}</div>
                    <div>Location : {detail.location.name}</div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail