import React, { Component } from 'react';

class Total extends Component {
    render() {
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                {this.props.USCurrencyFormat}
                </div>
            </div>
        )
    }
}

export default Total;