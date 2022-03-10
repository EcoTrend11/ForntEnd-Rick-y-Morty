import { useState } from "react";
import axios from "axios"
import style from "./NavBar.module.css"

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
        <div className={style.container}>
            <div className={style.form__container}> 
                {/* <form onSubmit={(e)=> submit(e)}>
                    <input className={style.input} type= 'text' onChange={(e)=>onChange(e)} value={value}></input>
                    <button className={style.button}>search</button>
                </form> */}
            </div>
        </div>
    )
}

export default NavBar