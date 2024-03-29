import React from 'react';
import './Square.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button 
                className="Square" 
                onClick={() => this.setState({value: "X"})}
            >
                {this.state.value}
            </button>
        );
    }
}

export default Square;