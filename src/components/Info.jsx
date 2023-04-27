
import './Info.scss'
import apps from '../assets/apps.png'

const Info = () => {
    return ( 
    <div className="info">
        <div className="info__container">
            <div className="info__image">
                <img src={apps} alt="Search"></img>
            </div>

            <div className="info__content-container">
                <h2 className="info__header">What is Lorem Ipsum?</h2>
                <h3 className="info__header">Lorem Ipsum is simply dummy</h3>

                <div className="info__text-container">
                    <h4 className="info__text-header"> Lorem Ipsum passages</h4>
                    <p className="info__text">
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the 
                        industry standard dummy text ever since the 1500s
                    </p>     
                </div>
                <div className="info__text-container">
                    <h4 className="info__text-header"> Lorem Ipsum passages</h4>
                    <p className="info__text">
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the 
                        industry standard dummy text ever since the 1500s
                    </p>     
                </div>
                <div className="info__text-container">
                    <h4 className="info__text-header"> Lorem Ipsum passages</h4>
                    <p className="info__text">
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the 
                        industry standard dummy text ever since the 1500s
                    </p>     
                </div>
            </div>
        </div>
    </div>
    );
};
export default Info;