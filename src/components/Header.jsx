import './Header.scss'
import logo from '../assets/HFLOGO.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return ( 
    <div className="header">
        <div className="container">
            <img src={logo} alt="Hot Forex logo" className="logo"></img>
            <div className="nav-icon">
                <FontAwesomeIcon icon={faBars}/>
            </div>

            <div className="nav-container">
                <div className="home-icon">
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <p>ABOUT</p>
                <p>PRODUCTS</p>
                <p>ACCOUNTS</p>
                <p>PLATFORMS</p>
                <p>TOOLS</p>
                <p>EDUCATION</p>
            </div>
        </div>
    </div>
    );
};
export default Header;