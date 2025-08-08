import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currency: "",
    };
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    let message = "";

    if (currency.toLowerCase() === "euro") {
      const converted = amount * 80;
      message = `Converting to Euro: Amount is ${converted}`;
    } else if (currency.toLowerCase() === "rupees") {
      const converted = amount / 80;
      message = `Converting to Rupees: Amount is ${converted}`;
    } else {
      message = "Unsupported currency";
    }

    alert(message);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Amount: <input type="text" value={this.state.amount} onChange={this.handleAmountChange} />
        </label>
        <br />
        <label>
          Currency: <input type="text" value={this.state.currency} onChange={this.handleCurrencyChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CurrencyConvertor;