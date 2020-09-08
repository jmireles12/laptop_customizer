import React from 'react';
import Total from '../Total/Total'

class Cart extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {this.props.summary}
                <Total USCurrencyFormat={this.props.USCurrencyFormat}/>
            </section>
        )
    }
}

export default Cart;