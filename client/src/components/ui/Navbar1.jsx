//okok

import { Link } from "react-router";


export default function Navbar(){
    return (
        <header>
            <h1>MAGIC CARDs</h1>
            <nav>
                <Link to='/register'>Регистрация</Link>
                <Link to='/user'>Войти</Link>
                <Link to='/'>HOME</Link>
            </nav>

        </header>
    )
}