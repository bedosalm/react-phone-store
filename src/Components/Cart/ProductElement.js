import React, { Component } from 'react';

class ProductElement extends Component {
    render() {
        return (
            <div className="container-fluid d-none d-lg-block text-center">
                <div className="row">
                <div className="col-10  mx-auto col-lg-2">
                <p className="text-uppercase">products</p>
                </div>
                <div className="col-10  mx-auto col-lg-2 mb-2">
                <p className="text-uppercase">name of product</p>
                </div>
                <div className="col-10  mx-auto col-lg-2">
                <p className="text-uppercase">price</p>
                </div>
                <div className="col-10  mx-auto col-lg-2">
                <p className="text-uppercase">capacity</p>
                </div>
                <div className="col-10  mx-auto col-lg-2">
                <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10  mx-auto col-lg-2">
                <p className="text-uppercase">total</p>
                </div>
                </div>
            </div>
        );
    }
}

export default ProductElement;