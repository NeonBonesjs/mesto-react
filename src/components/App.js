// import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: ''
    }
  }

  handleCardClick = (card) => {
    this.setState({selectedCard: card})
    console.log(this.state.selectedCard)
  }

  handleEditAvatarClick = () => {
    this.setState({isEditAvatarPopupOpen: true})

  }

  handleEditProfileClick = () => {
    this.setState({isEditProfilePopupOpen: true})
  }

  handleAddPlaceClick = () => {
    this.setState({isAddPlacePopupOpen: true})
  }

  closeAllPopup = () => {
    this.setState({isEditAvatarPopupOpen: false, isEditProfilePopupOpen: false, isAddPlacePopupOpen: false, selectedCard:''})
  }


  render(){
  return (
    <div className="root">
        <div className="page root__page">
            <Header />
            <Main 
              onEditAvatar={this.handleEditAvatarClick} 
              onEditProfile={this.handleEditProfileClick} 
              onAddPlace={this.handleAddPlaceClick}
              onCardClick={this.handleCardClick}
            />
            <PopupWithForm 
              isOpen={this.state.isEditProfilePopupOpen ? 'popup_active' : ''}
              name='edit'
              title='Редактировать профиль'
              children={
                <>
                <div>
                <input
                  type="text"
                  name="form__name"
                  className="popup__form popup__form_type_name"
                  // value=""
                  id="input-profile-name"
                  required
                  placeholder="Имя пользователя"
                  minLength="2"
                  maxLength="40"
                />
                <span
                  id="input-profile-name-error"
                  classNam="popup__error"
                ></span>
              </div>
              <div>
                <input
                  type="text"
                  name="form__subname"
                  placeholder="О себе"
                  className="popup__form popup__form_type_subname"
                  // value=""
                  id="input-profile-subname"
                  required
                  minLength="2"
                  maxLength="200"
                />
                <span
                  id="input-profile-subname-error"
                  className="popup__error"
                ></span>
              </div>
              </>
              }
              button = 'Сохранить'
              onClose = {this.closeAllPopup}
            />
            <PopupWithForm 
              isOpen={this.state.isAddPlacePopupOpen ? 'popup_active' : ''}
              name='add-photo'
              title='Новое место'
              button='Сохранить'
              children={
                <>
                <div>
                <input
                  type="text"
                  name="form__name"
                  className="popup__form popup__form_type_name"
                  // value=""
                  placeholder="Название"
                  id="input-title-photo"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span
                  id="input-title-photo-error"
                  className="popup__error"
                ></span>
              </div>
              <div>
                <input
                  type="url"
                  name="form__subname"
                  className="popup__form popup__form_type_subname"
                  // value=""
                  placeholder="Ссылка на картику"
                  id="input-link-photo"
                  required
                />
                <span
                  id="input-link-photo-error"
                  className="popup__error"
                ></span>
              </div>
                </>
              }
              onClose = {this.closeAllPopup}

            />
            <PopupWithForm 
              isOpen={this.state.isEditAvatarPopupOpen ? 'popup_active' : ''}
              name='avatar'
              title='Обновить аватар'
              button='Сохранить'
              children={
                <div>
                <input
                  type="url"
                  name="form__subname"
                  className="popup__form popup__form_type_subname"
                  // value=""
                  placeholder="Ссылка на картику"
                  id="input-link-photo-avatar"
                  required
                />
                <span
                  id="input-link-photo-avatar-error"
                  className="popup__error"
                ></span>
              </div>
              }
              onClose = {this.closeAllPopup}

            />
            <ImagePopup card={this.state.selectedCard} isOpen={this.state.selectedCard === '' ? '' : 'popup_active'} onClose={this.closeAllPopup}/>
            <Footer />
        </div>
        
        {/* <!-- <script src="./scripts/index.js" type="module"></script> --> */}
    </div>
  );}
}

export default App;
