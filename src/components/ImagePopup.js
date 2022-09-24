import React from "react";
export default function ImagePopup (props){




  
    return(
      <div className={`popup popup_photo ${props.isOpen}`} onClick={(evt) => {
        if(evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){props.onClose()}
      }}>
          <div className="popup__text-image">
            <img src={props.card === null ? '#' : props.card.link} alt="" className="popup__image" />
            <p className="popup__text">{props.card === null ? '' : props.card.name}</p>
            <button type="button" className="popup__close"></button>
          </div>
      </div>
    )
  
}