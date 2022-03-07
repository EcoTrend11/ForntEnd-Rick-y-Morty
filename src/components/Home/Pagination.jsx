import axios from "axios";

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
        <div>
            {prev?(
                <button onClick={handlePrev}>prev</button>
            ) : null
            }
            {next?(
                <button onClick={handleNext}>next</button>
            ) : null
            }
        </div>
    )
}

export default Pagination