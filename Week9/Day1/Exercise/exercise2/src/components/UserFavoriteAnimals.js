import React, { Component } from 'react'; 

export default class UserFavoriteAnimals extends Component {
  render() {
    // Access the favAnimals prop passed from the parent component
    const { favAnimals } = this.props;

    return (
      <div>
        <h2>User's Favorite Animals:'</h2>
        <ul>
          {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}
