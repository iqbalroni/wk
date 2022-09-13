import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1>
          <b>❤️</b> Love You {this.props.nama}
        </h1>
        <h1>
          Ini lovenya yang ke - {this.props.nomor} <b>❤️</b>
        </h1>
      </div>
    );
  }
}
export default Card;
