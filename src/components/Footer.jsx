import './Footer.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return ( 
    <div className="footer">
        <div className="footer__social-container">
            <div className="footer__container footer__container--social">
                <div className="footer__award-container">
                    <FontAwesomeIcon className="footer__primary-icon" icon={faTrophy} />
                    <p className="footer__award-text">Winner of 19 Industry Awards</p>
                </div>
                <div className="footer__social-icons-container">
                    <FontAwesomeIcon className="footer__social-icon" icon={faFacebookF} />
                    <FontAwesomeIcon className="footer__social-icon" icon={faTwitter} />
                    <FontAwesomeIcon className="footer__social-icon" icon={faGooglePlusG} />
                    <FontAwesomeIcon className="footer__social-icon" icon={faLinkedinIn} />
                    <FontAwesomeIcon className="footer__social-icon" icon={faYoutube} />
                    <FontAwesomeIcon className="footer__social-icon" icon={faChartColumn} />
                </div>
            </div>
        </div>
        <div className="footer__main-container">
            <div className="footer__container">
                <div className="footer__contact">
                    <p className="footer__header">CONTACT US</p>
                    <div className="footer__contact-row">
                        <FontAwesomeIcon className="footer__primary-icon" icon={faEnvelope} />
                        <p className="footer__text">support@hfeu.com</p>
                    </div>
                    <div className="footer__contact-row">
                        <FontAwesomeIcon className="footer__primary-icon" icon={faPhone} />
                        <p className="footer__text">+357-24-400165</p>
                    </div>
                    <div className="footer__contact-row">
                        <FontAwesomeIcon className="footer__primary-icon" icon={faComments} />
                        <p className="footer__text">Live Chat</p>
                    </div>

                </div>

                <div className="footer__map-container">
                    <div className="footer__map-section">
                        <p className="footer__header">ABOUT</p>
                        <p className="footer__map-row footer__text">About HotForex</p>
                        <p className="footer__map-row footer__text">Why HotForex</p>
                        <p className="footer__map-row footer__text">Regulation an License</p>
                        <p className="footer__map-row footer__text">Security of Funds</p>
                        <p className="footer__map-row footer__text">Awards</p>
                    </div>

                    <div className="footer__map-section">
                        <p className="footer__header">PRODUCTS</p>
                        <p className="footer__map-row footer__text">Forex</p>
                        <p className="footer__map-row footer__text">Metals and Oil</p>
                        <p className="footer__map-row footer__text">Indices</p>
                        <p className="footer__map-row footer__text">Shares</p>
                        <p className="footer__map-row footer__text">Comodity CFDs</p>
                    </div>

                    <div className="footer__map-section">
                        <p className="footer__header">TRADING</p>
                        <p className="footer__map-row footer__text">Trading Tools</p>
                        <p className="footer__map-row footer__text">Forex Education</p>
                        <p className="footer__map-row footer__text">Platforms</p>
                        <p className="footer__map-row footer__text">Account Types</p>
                        <p className="footer__map-row footer__text">Exclusive Analysis</p>
                    </div>

                    <div className="footer__map-section">
                        <p className="footer__header">PROMOTIONS</p>
                        <p className="footer__map-row footer__text">Loyalty Program</p>
                        <p className="footer__map-row footer__text">Bonus Offerings</p>
                        <p className="footer__map-row footer__text">Contests & Rewards</p>
                        <p className="footer__map-row footer__text">Free Funding</p>
                        <p className="footer__map-row footer__text">Deposit</p>
                    </div>

                    <div className="footer__map-section">
                        <p className="footer__header">AFFILIATES</p>
                        <p className="footer__map-row footer__text">Affiliates</p>
                        <p className="footer__map-row footer__text">About HF Affiliates</p>
                        <p className="footer__map-row footer__text">Affiliate Types</p>
                        <p className="footer__map-row footer__text">Marketing tools</p>
                        <p className="footer__map-row footer__text">Analysis</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Footer;