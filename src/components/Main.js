import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    }
  }

  changeUserInfo = () => {
    api.getUserInfo()
      .then((res) => this.setState({
        userName: res.name,
        userDescription: res.about,
        userAvatar: res.avatar
      }))
  }


  getCards = () => {
    api.getInitialCard()
      
      .then((res) => {
        this.setState({
          cards: res
        })
      })

  }

  componentDidMount(){
    this.changeUserInfo();
    this.getCards()
  }

  render() {
    return (
      <>
        <main className="main">
          <section className="profile page__profile">
            <div className="profile__avatar-info">
              <div className="profile__avatar-background">
                <img src={this.state.userAvatar} alt="аватар" className="profile__avatar" onClick={this.props.onEditAvatar} />
              </div>
              <div className="profile__info">
                <h1 className="profile__name">{this.state.userName}</h1>
                <p className="profile__subname">{this.state.userDescription}</p>
                <button className="profile__edit-button" type="button" onClick={this.props.onEditProfile}></button>
              </div>
            </div>
            <button className="profile__add-button" type="button" onClick={this.props.onAddPlace}></button>
          </section>
          <section className="elements page__elements">
          {this.state.cards.map((card) => {return <Card onCardClick={this.props.onCardClick} key={card._id} card={card} />})}
          </section>
        </main>
     
        <div className="popup popup_photo">
          <div className="popup__text-image">
            <img src="#" alt="" className="popup__image" />
            <p className="popup__text"></p>
            <button type="button" className="popup__close"></button>
          </div>
        </div>
        <div className="popup popup_delete-photo">
          <div className="popup__container">
            <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
            <button className="popup__button-save" type="button">
              Да
            </button>
            <button className="popup__close" type="button"></button>
          </div>
        </div>
       
        <template id="element-template">
          <div className="element">
            <img
              src="#"
              className="element__image"
              alt="картинка не смогла загрузиться или ссылка неверная"
            />
            <div className="element__name-like">
              <h2 className="element__name"></h2>
              <div className="element__like-plus-number">
                <button className="element__like-button" type="button"></button>
                <p className="element__number-like">0</p>
              </div>
            </div>
            <button type="button" className="element__trash"></button>
          </div>
        </template>
      </>
    );
  }
}