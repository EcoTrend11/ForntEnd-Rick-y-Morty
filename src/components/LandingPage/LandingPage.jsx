import { Link } from "react-router-dom"
import  style from"./LandingPage.module.css"

const LandingPage = () =>{
    return(
        <div>
            <div className={style.container}>
                <h3 className={style.title}>
                    Bienvenido a Rick y Morty App
                </h3>
                <p className={style.texto}>Aplicacion creada con React consumiendo una api externa de Rick y Morty , espero que sea de su agrado
                </p>
                <Link to='/home' className={style.link}>
                    <div className={style.button}>
                        GO !!!
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage