// import './App.css';
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { currentUserContext } from "../context/CurrentUserContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: null,
      currentUser: {},
      cards: [],
    };
  }

  handleCardClick = (card) => {
    this.setState({ selectedCard: card });
  };

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  };

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  };

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  };

  closeAllPopup = () => {
    this.setState({
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      selectedCard: null,
    });
  };

  handleUpdateUser = (data) => {
    api
      .editUserInfo(data)
      .then((res) => {
        this.setState({ currentUser: res });
      })
      .then((res) => this.closeAllPopup())
      .catch((err) => console.log(`Error: ${err}`));
  };

  handleUpdateAvatar = (data) => {
    api
      .editAvatar(data)
      .then((res) => this.setState({ currentUser: res }))
      .then((res) => this.closeAllPopup())
      .catch((err) => console.log(`Error: ${err}`));
  };

  getCards = () => {
    api
      .getInitialCard()

      .then((res) => {
        this.setState({
          cards: res,
        });
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  handleCardLike = (card) => {
    const isLiked = card.likes.some(
      (i) => i._id === this.state.currentUser._id
    );
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      this.setState({
        cards: this.state.cards.map((c) => (c._id === card._id ? newCard : c)),
      });
    });
  };

  handleCardDelete = (card) => {
    api.removeCard(card._id).then((res) => {
      this.setState({
        cards: this.state.cards.filter((c) => {
          return !(c._id === card._id);
        }),
      });
    });
  };

  componentDidMount() {
    api.getUserInfo().then((res) => {
      this.setState({ currentUser: res });
    });
    this.getCards();
  }

  handleAddPlaceSubmit = (card) => {
    api
      .addNewCard(card)
      .then((newCard) => {
        this.setState({ cards: [newCard, ...this.state.cards] });
      })
      .then((res) => this.closeAllPopup())
      .catch((err) => console.log(`Error: ${err}`));
  };

  render() {
    return (
      <currentUserContext.Provider value={this.state.currentUser}>
        <div className="root">
          <div className="page root__page">
            <Header />
            <Main
              onEditAvatar={this.handleEditAvatarClick}
              onEditProfile={this.handleEditProfileClick}
              onAddPlace={this.handleAddPlaceClick}
              onCardClick={this.handleCardClick}
              onCardLike={this.handleCardLike}
              onCardDelete={this.handleCardDelete}
              cards={this.state.cards}
            />

            <Footer />
            <EditProfilePopup
              isOpen={this.state.isEditProfilePopupOpen ? "popup_active" : ""}
              onClose={this.closeAllPopup}
              onUpdateUser={this.handleUpdateUser}
            />
            <AddPlacePopup
              isOpen={this.state.isAddPlacePopupOpen ? "popup_active" : ""}
              onClose={this.closeAllPopup}
              onAddPlace={this.handleAddPlaceSubmit}
              cards={this.state.cards}
            />
            <EditAvatarPopup
              isOpen={this.state.isEditAvatarPopupOpen ? "popup_active" : ""}
              onClose={this.closeAllPopup}
              onUpdateAvatar={this.handleUpdateAvatar}
            />
            <ImagePopup
              card={this.state.selectedCard}
              isOpen={this.state.selectedCard === null ? "" : "popup_active"}
              onClose={this.closeAllPopup}
            />
          </div>
        </div>
      </currentUserContext.Provider>
    );
  }
}

export default App;
