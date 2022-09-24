import React from 'react';
export default function PopupWithForm (props){
  

  // closePopup = (evt) => {
  //   if(evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){this.props.onClose()}
  // }

  
    return(
      <div className={`popup popup_${props.name} ${props.isOpen}`} id="popup-edit" onClick={(evt) => {
        if(evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){props.onClose()}
      }}>
          <div className="popup__container">
            <h2 className="popup__title">{props.title}</h2>
            <form
              className="popup__forms"
              name={props.name}
              id="form-edit"
              noValidate
            >
              {props.children}
              <button
                type="submit"
                className="popup__button-save"
                id="submit-profile"
              >
                {props.button}
              </button>
            </form>
            <button className="popup__close" type="button" ></button>
          </div>
        </div>
    )
  
}