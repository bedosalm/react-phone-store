import React, { Component } from 'react';
import {ProductConsumer} from "../Productcontext";
import {Link} from "react-router-dom";
import { ButtonContainer } from "./Button";
import { AiOutlineShoppingCart } from "react-icons/ai";


class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                   const {id,company,info,inCart,title,img,price} = value.Details
                   return (
                    <div  className="container">
                    <div className="row">
                     <div className="col-10 mx-auto text-center text-slanted text-blue py-5">
                         <h1>{title}</h1>
                     </div>
                    </div>
                  {/* end title */}
                 {/* start product */}
                 <div className="row">
                     <div className="col-10 col-md-6 col-md-3 my-3 text-capitalize">
                      <img src={img} alt="product img"/>
                     </div>
                     <div className="col-10 col-md-6 col-md-3 my-3 text-capitalize">
                      <h2>Model : {title}</h2>
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-3">
                        Made By <span className="text-uppercase">{company}</span>
                      </h4>
                      <h4 className="text-blue">
                          <strong>
                              price : <span>$</span>
                              {price}
                          </strong>
                      </h4>
                      <p className="text-capitalize font-weight-bold mt-3 mb-0">
                       some info about products
                      </p>
                      <p className="text-muted lead"> {info}</p>
                      <Link  to="/">
                      <ButtonContainer>
                         Back to List
                      </ButtonContainer>
                      </Link>
                      <ButtonContainer cart disabled={inCart ? true : false}
                      onClick={()=> value.addToCart(id)}
                      >
                        {inCart ? "in Cart" : <AiOutlineShoppingCart /> }
                      </ButtonContainer>
                     </div>
                 </div>
                </div>
                   )
                 }}
                  
            </ProductConsumer>
        );
    }
}

export default Details;