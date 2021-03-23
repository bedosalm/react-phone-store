import React, { Component } from 'react';

class Emptycart extends Component {
    render() {
        return (
            <div>
                <h1 className="text-title text-capitalize text-center py-3 font-italic">your Cart is currently empty</h1>
            </div>
        );
    }
}

export default Emptycart;