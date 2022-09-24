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
      .catch(err => console.log(`Error: ${err}`))
  }


  getCards = () => {
    api.getInitialCard()
      
      .then((res) => {
        this.setState({
          cards: res
        })
      })
      .catch(err => console.log(`Error: ${err}`))

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
     
       
        
       
        
      </>
    );
  }
}