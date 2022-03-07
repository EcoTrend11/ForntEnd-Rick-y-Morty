import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "./NavBar"
import CharacterGrid from "./CharacterGrid"
import Pagination from "./Pagination"

const Home = () =>{
     
    const [next, setNext] = useState()
    const [prev, setPrev] = useState()
    const [data, setData] = useState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async function(){
        let api = await axios.get("https://rickandmortyapi.com/api/character")
        let resultsDataApi = api.data.results
        let infoDataApi = api.data.info
        setNext(infoDataApi.next)
        setPrev(infoDataApi.prev)
        setData(resultsDataApi)
    },[])
    
    console.log(data)
    if(!data){
        return(
            <div>Loading</div>
        )
    }

    return(
        <div>
            <NavBar setData={setData} setPrev={setPrev} setNext={setNext}/>
            <Pagination setData={setData} next={next} prev={prev} setPrev={setPrev} setNext={setNext} />
            <CharacterGrid data={data}/>
        </div>
    )
}

export default Home