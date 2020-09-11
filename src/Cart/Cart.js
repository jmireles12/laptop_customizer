import React, { Component } from 'react';
import Total from '../Total/Total'
import Option from '../Option/Option'

class Cart extends Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );
        
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
        return (
            <Option
                key={idx}
                USCurrencyFormat={this.props.USCurrencyFormat} 
                feature={feature} summary={summary} 
                featureHash={featureHash} 
                selectedOption={selectedOption} 
            />
        )
    })
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total USCurrencyFormat={this.props.USCurrencyFormat.format(total)}/>
            </section>
        )
    }
}

export default Cart;