import React, { Component } from 'react';



import './App.css';
import Header from './Header/Header';
import Form from './Form/Form';
import Cart from './Cart/Cart';
import Option from './Option/Option'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div>
          <Option USCurrencyFormat={USCurrencyFormat} feature={feature} summary={summary} featureHash={featureHash} selectedOption={selectedOption} />
        </div>
      );
    });

    return (
      <div className="App">
        <Header />
        <main>
          <Form features={this.props.features}
            selected={this.state.selected}
            usCurrency={USCurrencyFormat}
            updateFeature={(feature, item)=> this.updateFeature(feature, item)}/>
          <Cart key={this.key} summary={summary} selected={this.state.selected} USCurrencyFormat={USCurrencyFormat}/>
        </main>
      </div>
    );
  }
}

export default App;
