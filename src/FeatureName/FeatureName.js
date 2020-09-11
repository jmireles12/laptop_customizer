import React, { Component } from 'react'

class FeatureName extends Component {
    render() {
        return (
            <div>
                <fieldset className="feature" key={this.props.featureHash}>
                    <legend className="feature__name">
                        <h3>{this.props.feature}</h3>
                    </legend>
                    {this.props.options}
                </fieldset>
            </div>
        )
    }
}

export default FeatureName;