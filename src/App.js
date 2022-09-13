import React, { Component } from "react";
import "./style.css";
import Card from "./Card";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      number: "",
    };

    this.HandleName = this.HandleName.bind(this);
    this.HandleNumber = this.HandleNumber.bind(this);
  }

  HandleName(event) {
    this.setState({
      nama: event.target.value,
    });
  }

  HandleNumber(event) {
    this.setState({
      number: event.target.value,
    });
  }

  render() {
    const rows = [];
    for (let i = 0; i < this.state.number; i++) {
      rows.push(i);
    }
    console.log(rows);
    return (
      <div className="App">
        <form>
          <h4>GatauMauBikinApa.Id</h4>
          <input
            type="text"
            placeholder="Masukan Nama"
            onChange={this.HandleName}
            value={this.state.nama}
          ></input>
          <input
            type="number"
            placeholder="Masukan Perulangan"
            onChange={this.HandleNumber}
            value={this.state.number}
          ></input>
        </form>
        {this.state.nama === "" ? (
          <div className="card">
            <h1>Masukan Nama Duluu</h1>
          </div>
        ) : this.state.number >= 1001 ? (
          <div className="card">
            <h1>Perulangan Maximal 1000</h1>
          </div>
        ) : (
          rows.map((loop, index) => (
            <Card nama={this.state.nama} nomor={index + 1} />
          ))
        )}
      </div>
    );
  }
}
