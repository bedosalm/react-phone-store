import React, { Component } from 'react';
import Title from "./Title";
import { ProductConsumer } from "../Productcontext";
import Product from "./Product"
class Productlist extends Component {
    render() {
        return (
            <>
            <div className="py-4">
            <div className="container">
                <Title name="our" title="Products"/>
               <div className="row">
               <ProductConsumer>
                    {value => {
                     return value.Products.map(product => {
                          return <Product key={product.id} product={product}/>
                      })
                    }}
                </ProductConsumer>
               </div>
            </div>
            </div>
            </>
        );
    }
}

export default Productlist;