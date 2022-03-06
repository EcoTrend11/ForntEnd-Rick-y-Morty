import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "./NavBar"
import CharacterGrid from "./CharacterGrid"

const Home = () =>{
    
    
    
    
    const [data, setData] = useState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async function(){
        let api = await axios.get("https://rickandmortyapi.com/api/character")
        let dataApi = api.data.results
        setData(dataApi)
    },[])

    console.log(data)
    if(!data){
        return(
            <div>Loading</div>
        )
    }

    return(
        <div>
            <NavBar setData={setData}/>
            <CharacterGrid data={data}/>
        </div>
    )
}

export default Home