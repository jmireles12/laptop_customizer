import React, { Component } from 'react';
import Total from '../Total/Total'

class Cart extends Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {this.props.summary}
                <Total USCurrencyFormat={this.props.USCurrencyFormat.format(total)}/>
            </section>
        )
    }
}

export default Cart;