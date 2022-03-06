import { Link } from "react-router-dom"

const LandingPage = () =>{
    return(
        <div>
            <div>
                bienvenido a rick y morty app
            </div>
            <Link to = '/home'>
                ir a home
            </Link>
        </div>
    )
}

export default LandingPage