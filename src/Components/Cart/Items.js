import React from 'react';
import { AiOutlineShoppingCart , AiFillDelete} from "react-icons/ai";
function Items({value,cart}) {
  const {increase , decrease, cartTotal,removeItem} = value
    return (
        <>
        {cart.map(item => {
         const {id,title,img,price,count,total} = item;
         return (
        <div className="container-fluid text-center" key={item.id}>
             <div className="row">
            <div className="col-10  mx-auto col-lg-2">
                <img  src={img} className="img-fluid" 
                style={{width:"5rem", height:"4rem"}}
                alt={title} />
            </div>
              <div className="col-10  mx-auto col-lg-2">
                <p className="text-uppercase">
                    <span>{title}</span>
                </p>
              </div>
            <div className="col-10  mx-auto col-lg-2">
               <p className="text-uppercase text-blue"><strong>${price}</strong></p>
            </div>
            <div className="col-10  mx-auto col-lg-2 text-center">
               <div className="d-flex justify-content-center">
                <button className={count == 1 ? "btn btn-info disabled" :"btn btn-info" } onClick={() => decrease(id)}>-</button>
                <p className="count-num">{count}</p>
                <button className="btn btn-info" onClick={() => increase(id)} >+</button>
               </div>
            </div>
            <div className="col-10  mx-auto col-lg-2">
               <p className="text-uppercase remove" onClick={() => removeItem(id)}><AiFillDelete /></p>
            </div>
            <div className="col-10  mx-auto col-lg-2">
               <p className="text-uppercase">{total}</p>
            </div>
          </div>
        </div>
         )
        })
       }
        </>
    );
}

export default Items;