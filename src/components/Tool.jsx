import './Tool.scss'
import mobile from '../assets/mobile.png'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'


const Header = () => {
    return ( 
    <div className="tool" >
        <div className="tool__container">
            <div className="tool__info">
                <h2>HotForex App</h2>
                <h3>Your Indispensable Tool</h3>
                <p>- Lorem Ipsum is simply dummy text of the printing and</p>
                <p>- Lorem Ipsum is simply dummy text of the</p>
                <p>- Lorem Ipsum is simply dummy text of the printing </p>

                <div className="tool__download">
                    <img src={googleplay} alt="Google play"></img>
                    <img src={appstore} alt="App store"></img>
                </div>

            </div>
            <img src={mobile} alt="Mobile phone tools" className="tool__image"></img>
        </div>



    </div>
    );
};
export default Header;