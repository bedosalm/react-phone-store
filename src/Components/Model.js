import React, { Component } from 'react';
import style from "styled-components";
import {ProductConsumer} from "../Productcontext";
import {Link} from "react-router-dom";
import {ButtonContainer,ButtonContainerdel} from "./Button"
class Model extends Component {
    render() {
     return (
        <ProductConsumer>
        {value => {
            const {openModel,closeModel,removeItem} = value;
            const {id,img , title , price} = value.myModel
            if(!openModel){
                return null
            } else{
                return (
                    <ModelContainer >
                       <div className="container">
                        <div className="row">
                         <div id="model" className="col-9 mx-auto col-md-6 col-lg-4 text-center py-4">
                              <img src={img} style={{width:"200px" , height:"200px"}}/>
                              <h5 className="text-title">{title}</h5>
                              <p className="text-muted">
                                  <strong>
                                  ${price}
                                  </strong>
                              </p>
                              <Link to="/">
                              <ButtonContainer onClick={()=> closeModel()}>
                                  Back to store
                              </ButtonContainer >
                              </Link>
                              <Link to="/cart">
                              <ButtonContainer cart onClick={()=> closeModel()}>
                                  to cart
                              </ButtonContainer>
                              </Link>
                            <Link  to="/">
                            <ButtonContainerdel delitem onClick={()=> removeItem(id)}>
                                remove Item
                            </ButtonContainerdel>
                            </Link>
                         </div>
                        </div>
                       </div>
                    </ModelContainer >
                    )
            }
            
         }
        }
        </ProductConsumer>
     )
    }
}

export default Model;

const ModelContainer = style.div`
position : fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color:rgba(0,0,0, .4);
display : flex;
justify-content:center;
align-items:center;
#model {
    background-color:var(--white)
}
`
