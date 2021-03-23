import React, { Component } from 'react';
import {ProductConsumer} from "../../Productcontext";
import Title from "../Title";
import ProductElement from "./ProductElement";
import Emptycart from "./Emptycart";
import Items from "./Items";
import Cartinfo from "./Cartinfo"



class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {Cart} = value;
                    if(Cart.length > 0){
                        return (
                            <>
                            <Title name="Cart" title="product" />
                            <ProductElement />
                            <Items value={value} cart={Cart}/>
                            <Cartinfo value={value}/>
                            </>
                        )
                    }else{
                      return  <Emptycart />
                    }
                }}
               
            </ProductConsumer>
        );
    }
}

export default Cart;