
import './Features.scss'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import mob2 from '../assets/mob2.png'

const Features = () => {
    return ( 
    <div className="features">
         <div className="features__container">
            <div className="features__header">
            <h2>This is dummy text</h2> 
            </div>
            <div className="features__content-container">
                <div className="features__left-column">
                    <div className="features__feature-container">
                        <div className="features__icon">
                            <img src={icon1} alt="Search"></img>
                        </div>
                        <div className="features__info features__info--left">
                            <p>It is a long established fact that a reader</p>
                        </div>
                    </div>
                    <div className="features__feature-container">
                        <div className="features__icon">
                            <img src={icon2} alt="Money"></img>
                        </div>
                        <div className="features__info features__info--left">
                            <p>It is a long established fact that a reader</p>
                        </div>
                    </div>
                </div>

                <img className="features__image" src={mob2} alt="Search"></img>

                <div className="features__right-column">
                    <div className="features__feature-container">
                        <div className="features__icon">
                            <img src={icon3} alt="Organism"></img>
                        </div>
                        <div className="features__info features__info--right">
                            <p>The standard chunk of Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="features__feature-container">
                        <div className="features__icon">
                            <img src={icon4} alt="Stocks"></img>
                        </div>
                        <div className="features__info features__info--right">
                            <p>The standard chunk of Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    );
};
export default Features;