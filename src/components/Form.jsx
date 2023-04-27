import { useState, useEffect } from 'react'
import './Form.scss'

const Header = () => {
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [phonePrefix, setPhonePrefix] = useState("")
    const [currency, setCurrency] = useState("")

    useEffect(() => {
        if(!country) {
            return
        }
        switch (country) {
            case 'cyprus':
                setPhonePrefix('+357')
                break;
            case 'sweden':
                setPhonePrefix('+46')
                break;
            case 'germany':
                setPhonePrefix('+49')
                break;
            default:
                setPhonePrefix('')
                break;
        }
        
    }, [country]);

    function submit(event) {
        event.preventDefault()
        console.log(event)
    }

    return ( 
    <div className="form">
        <form className="form__container" onSubmit={submit}>
            <div className="form__input-container">
                <input className="form__input" type="text" name="firstName" placeholder="First Name" required/>
                <input className="form__input" type="text" name="lastName" placeholder="Last Name" required/>
                <input className="form__input" type="email" name="email" placeholder="Email" required onChange={event => setEmail(event.currentTarget.value)}/>
                <select className="form__input" name="country" defaultValue={'default'} required onChange={event => setCountry(event.currentTarget.value)}>
                    <option value="default" disabled >Country of Residence</option> 
                    <option value="cyprus">Cyprus</option> 
                    <option value="sweden">Sweden</option> 
                    <option value="germany">Germany</option> 
                </select>
                <div className="form__phone-container">
                    <p className="form__input form__phone-prefix">{phonePrefix}</p>
                    <input className="form__input form__phone" type="number" name="phone" placeholder="Phone Number" required/>
                </div>
                <select className="form__input" name="currency" required onChange={event => setCurrency(event.currentTarget.value)}>
                    <option value="usd">USD</option> 
                    <option value="eur">EUR</option> 
                    <option value="gbp">GBP</option> 
                </select>
            </div>
            <div className="form__submit-container">
                <label  className="form__terms-label"htmlFor="terms">I have read and accepted the privacy policy <br />Trading Forex & CFDs is risky
                    <input className="form__terms" type="checkbox" id="terms" name="terms" value="terms" required></input>
                    <span className="form__terms-checkmark"></span>
                </label>
                <button className="form__submit-button" type="submit" >REGISTER NOW</button>
            </div>
        </form>
    </div>
    );
};
export default Header;