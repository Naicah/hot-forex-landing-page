import './Modal.scss'

const Modal = ({ 
    isOpen,  
    handleCloseModal,
    firstName, 
    lastName,
    email, 
    country,
    phonePrefix,
    phone, 
    currency
}) => {

  return (
    <>
      {isOpen && (
        <div>
            <div className="modal__background"></div>
            <div className="modal__container">
                <div className="modal__content">
                    <span className="modal__close" onClick={handleCloseModal}>
                    &times;
                    </span>
                    <h2 className="modal__header">Thank you for registering with us</h2>
                    <p>
                        <span>First name: </span>
                        <span>{firstName}</span>
                    </p>
                    <p>
                        <span>Last name: </span>
                        <span>{lastName}</span>
                    </p>
                    <p>
                        <span>Email: </span>
                        <span>{email}</span>
                    </p>
                    <p>
                        <span>Country: </span>
                        <span>{country}</span>
                    </p>
                    <p>
                        <span>Phone: </span>
                        <span>{phonePrefix}{phone}</span>
                    </p>
                    <p>
                        <span>Currency: </span>
                        <span>{currency}</span>
                    </p>
                </div>
                <button className="modal__button" onClick={handleCloseModal}>CLOSE</button>
            </div>
        </div>
      )}
    </>
  );
}

export default Modal;
