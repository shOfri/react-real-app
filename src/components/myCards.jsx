import React, { Component } from "react";
import { Link } from "react-router-dom";
import cardsService from "../services/cardsService";
import PageHeader from "./common/pageHeader";
import Card from "./card";

class MyCards extends Component {
  state = { cards: [] };

  async componentDidMount() {
    const { data } = await cardsService.getCards();

    if (data.length) {
      this.setState({ cards: data });
    }
  }
  render() {
    const { cards } = this.state;
    return (
      <div className="container">
        <PageHeader title={"My Cards"} />

        <Link to="/create-card">
          <button className="btn btn-sm btn-outline-secondary">
            Create a new card
          </button>
        </Link>

        <div className="row">
          {cards.length ? (
            cards.map((card) => <Card key={card._id} card={card} />)
          ) : (
            <p>No cards yet...</p>
          )}
        </div>
      </div>
    );
  }
}

export default MyCards;
