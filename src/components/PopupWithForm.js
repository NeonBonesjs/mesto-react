import React from 'react';
export default class PopupWithForm extends React.Component{
  constructor(props){
    super(props)
  }

  // closePopup = (evt) => {
  //   if(evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){this.props.onClose()}
  // }

  render(){
    return(
      <div className={`popup popup_${this.props.name} ${this.props.isOpen}`} id="popup-edit" onClick={(evt) => {
        if(evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){this.props.onClose()}
      }}>
          <div className="popup__container">
            <h2 className="popup__title">{this.props.title}</h2>
            <form
              className="popup__forms"
              name={this.props.name}
              id="form-edit"
              noValidate
            >
              {this.props.children}
              <button
                type="submit"
                className="popup__button-save"
                id="submit-profile"
              >
                {this.props.button}
              </button>
            </form>
            <button className="popup__close" type="button" ></button>
          </div>
        </div>
    )
  }
}