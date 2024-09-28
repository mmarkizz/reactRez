import { NavLink } from 'react-router-dom';
import './style.css';
import Tema from '../btnDarkMode/Tema';



const Navbar=()=>{
    const activeLink = 'nav-list__link" nav-list__link--active';
    const normalLink = "nav-list__link";


    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row" to='/'>
                <NavLink className="logo" to='/'>
                <strong>Freelancer</strong> portfolio
                </NavLink>

                <Tema/>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to='/' className={({isActive}) => isActive ? activeLink:normalLink}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to='/projects' className={({isActive}) => isActive ? activeLink:normalLink}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                    <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink:normalLink}>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
    };
export default Navbar;