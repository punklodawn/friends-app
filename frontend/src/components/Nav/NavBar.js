import { Link } from "react-router-dom";


const NavBar = () => {


    return (
        <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-white">Mis Amigos</Link>
                <Link to='/add' className="btn btn-success" type="submit">Add friend</Link>
            </div>
        </nav>
    )
}

export default NavBar;