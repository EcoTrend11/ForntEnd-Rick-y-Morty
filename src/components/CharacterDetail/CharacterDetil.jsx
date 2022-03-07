import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios  from "axios"
const CharacterDetail = () =>{

    const { id } = useParams()
    const [detail, setDetail] = useState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async function (){
        let api = await axios.get("https://rickandmortyapi.com/api/character/" + id)
        let dataApi = api.data
        setDetail(dataApi)
    },[])

    if(!detail){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div>
            <div>
                <img
                    src={detail.image}
                    alt="img not found"
                />
            </div>
            <div>
                <div> Name : {detail.name}</div>
                <div>Status : {detail.status} </div>
                <div>Species : {detail.species}</div>
                <div>Gender : {detail.gender}</div>
                <div>Location : {detail.location.name}</div>
            </div>
        </div>
    )
}

export default CharacterDetail