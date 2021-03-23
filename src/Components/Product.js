import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {ProductConsumer} from "../Productcontext";
import { AiOutlineShoppingCart , AiFillDelete} from "react-icons/ai";


class Product extends Component {
    render() {
        const {id,title,img,company,info,price,inCart} = this.props.product;
        return (
            <ProductWraper className="col-9 mx-auto col-md-6 col-lg-3 mb-5">
                <div className="card">
                  <ProductConsumer>
                      {value => {
                          return (
                     <div className="img-container p-5" onClick={()=>value.handelItem(id)}>
                        <Link to ="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button
                        className="cart-btn" disabled={inCart ? true : false}
                        onClick={()=> {
                            value.addToCart(id);
                            value.opentheModel(id)
                        }} 
                        >
                        {inCart ? (<p className="mb-0" disabled>in cart</p>): 
                        (<p className="mb-0"><AiOutlineShoppingCart /></p>)}
                        </button>
                         </div>
                          )
                      }}
                  </ProductConsumer>
                  <div className="card-footer d-flex justify-content-between">
                      <p className="align-self-center mb-0">{title}</p>
                      <p className="text-blue font-italic mb-0">${price}</p>
                  </div>
                </div>
            </ProductWraper>
        );
    }
}

export default Product;

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWraper = styled.div`
.card {
    border-color:transparent;
    transition:all .5s ease-in-out;
}

.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all .5s ease-in-out;
}

&:hover{
    .card{
        // border:2px solid rgba(0,0,0,0.2);
        box-shadow:0px 2px 5px 0px rgba(0,0,0, 0.2);
    }
    .card-footer{
        background:rgba(247, 247, 247)
    }
}
.img-container{
    position:relative;
    overflow:hidden
}
.card-img-top{
    transition:all .5s ease-in-out;
}
.img-container:hover .card-img-top{
    transform:scale(1.2)
}
.cart-btn{
    position: absolute;
    bottom: -32px;
    right: -55px;
    background-color: #0e90fd;
    border: none;
    color: #fff;
    border-radius: 3px;
    line-height: 33px;
    transition:all .5s ease-in-out
}
.img-container:hover .cart-btn{
    bottom: 0px;
    right: 0px;
}
`

