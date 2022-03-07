import { useState } from "react";
import axios from "axios"

const NavBar = ({setData ,setNext, setPrev}) =>{

    const [value, setValue] = useState("")
    function onChange (e){
        let value = e.target.value
        setValue(value)
    }
    async function submit(e){
        e.preventDefault();
        let api = await axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`)
        let dataApi = api.data.results
        let infoDataApi = api.data.info
        setPrev(infoDataApi.prev)
        setNext(infoDataApi.next)
        setData(dataApi)
    }

    console.log(value)
    return(
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <input type= 'text' onChange={(e)=>onChange(e)} value={value}></input>
                <button>search</button>
            </form>
        </div>
    )
}

export default NavBar