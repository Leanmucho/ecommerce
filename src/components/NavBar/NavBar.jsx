import { Link } from "react-router-dom";
import github from '../../assets/github.svg'
import styles from './navBar.module.css'

const NavBar = () => {
    return (
        <header className={`${styles.header} w-full absolute text-white`}>
            <span className="flex items-center font-semibold text-xl">JAMYCOMMERS</span>
            <nav className="flex justify-center items-center gap-6 font-semibold">
                <Link>Home</Link>
                <Link>Products</Link>
                <Link>About</Link>
            </nav>
            <div className={`${styles.redes} flex justify-end gap-2`}>
                <span className="flex gap-2">
                    <a href="#"><img className="w-6" src={github} alt="" /></a>
                    <a href="#"><img className="w-6" src={github} alt="" /></a>
                </span>
                <span>
                    <a href="#"><img className="w-6" src={github} alt="" /></a>
                </span>
            </div>
        </header>
    )
}

export default NavBar;