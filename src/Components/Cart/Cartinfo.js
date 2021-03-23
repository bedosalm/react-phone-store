import React from 'react';
import {Link} from "react-router-dom"

function Cartinfo({value}) {
    const {cartSupTotal,cartTotal,cartTax,clearcart} = value
    return (
        <>
           <div className="container">
           <div className="row">
               <div className="col-4 mt-2 ml-md-auto ml-sm-5 col-sm-8 text-capitalize text-right">
                <Link to="/" >
                    <button className="btn btn-danger text-uppercase mb-3 px-5"
                     type="button"
                     onClick={() => clearcart()}>
                     clear cart
                    </button>
                </Link>
                <h5 className="text-title">
                SupTotal : <strong>${cartSupTotal}</strong>
                </h5>
                <h5 className="text-title">
                Tax : <strong>${cartTax}</strong>
                </h5>
                <h5 className="text-title">
               Total : <strong>${cartTotal}</strong>
                </h5>
               </div>
           </div>    
           </div> 
        </>
    );
}

export default Cartinfo;