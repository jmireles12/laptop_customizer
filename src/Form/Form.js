import React, { Component } from 'react';
import Feature from '../Feature/Feature';

class Form extends Component {
    render() {
        return (
            <form className='main__form'>
                <h2>Customize your laptop</h2>
                <Feature
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected}
                    usCurrency={this.props.usCurrency}
                />
            </form>
        )
    }
}

export default Form;