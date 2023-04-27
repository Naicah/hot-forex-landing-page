import './Download.scss'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'


const Download = () => {
    return ( 
    <div className="download" >
        <div className="download__container">
            <p className="download__info">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
            </p>
            <p className="download__info download__info--bold">DOWNLOAD IT NOW</p>

            <div className="download__icons">
                <img src={googleplay} alt="Google play"></img>
                <img src={appstore} alt="App store"></img>
            </div>
        </div>



    </div>
    );
};
export default Download;