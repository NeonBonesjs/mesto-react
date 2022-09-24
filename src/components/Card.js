import React from "react";
export default class Card extends React.Component{
  constructor(props){
    super(props)
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card)
  }

  render(){
    return(
      <div className="element">
            <img
              src={this.props.card.link}
              className="element__image"
              alt="картинка не смогла загрузиться или ссылка неверная"
              onClick={this.handleClick}
            />
            <div className="element__name-like">
              <h2 className="element__name">{this.props.card.name}</h2>
              <div className="element__like-plus-number">
                <button className="element__like-button" type="button" />
                <p className="element__number-like">{this.props.card.likes.length}</p>
              </div>
            </div>
            <button type="button" className="element__trash" />
          </div>
    )
  }
}
