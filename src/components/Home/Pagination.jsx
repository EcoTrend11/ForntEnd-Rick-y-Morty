import axios from "axios";
import style from "./Pagination.module.css"

const Pagination = ({setData , next , prev ,setNext, setPrev}) => {
    

    console.log(next);
    console.log(prev);
    

    async function handleNext (e){
        let api = await axios.get(next)
        let dataApi = api.data.results
        let infoDataApi = api.data.info
        setPrev(infoDataApi.prev)
        setNext(infoDataApi.next)
        setData(dataApi)
    }

    async function handlePrev(e){

            let api = await axios.get(prev)
        let dataApi = api.data.results
        let infoDataApi = api.data.info
        setPrev(infoDataApi.prev)
        setNext(infoDataApi.next)
        setData(dataApi)
    }


    return(
        <div className={style.container}>
            <div className={style.container__button}>
                {prev?(
                    <button className={style.button} onClick={handlePrev}>Prev</button>
                ) : null
                }
                {next?(
                    <button className={style.button} onClick={handleNext}>Next</button>
                ) : null
                }
            </div>           
        </div>
    )
}

export default Pagination