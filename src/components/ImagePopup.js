import React from "react";
export default class ImagePopup extends React.Component{




  render(){
    return(
      <div className={`popup popup_photo ${this.props.isOpen}`} onClick={(evt) => {
        if(evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){this.props.onClose()}
      }}>
          <div className="popup__text-image">
            <img src={this.props.card.link} alt="" className="popup__image" />
            <p className="popup__text">{this.props.card.name}</p>
            <button type="button" className="popup__close"></button>
          </div>
      </div>
    )
  }
}