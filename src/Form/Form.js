import React, { Component } from 'react';

class Form extends Component {
    render() {
        
        return (
            <div>
                <form className='main__form'>
                    <h2>Customize your laptop</h2>
                    {features}
                </form>
            </div>
        )
    }
}

export default Form;