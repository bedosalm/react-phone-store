import React, { Component } from 'react';
import Cart from './Components/Cart/Cart';
import { storeProducts , detailProduct} from "./data";

const DataContext = React.createContext();

const ProductProvider = DataContext.Provider;
const ProductConsumer = DataContext.Consumer;


 class ProductContext extends Component {
     state = {
         Products : [],
         Details:detailProduct,
         Cart:[],
         openModel : false,
         myModel : detailProduct,
         cartSupTotal:0,
         cartTotal:0,
         cartTax:0
     }

     getItem = (id) => {
        const myProduct = this.state.Products.find(item => item.id === id);
        return myProduct
     }

     handelItem = (id) => {
        let theProduct = this.getItem(id)
        this.setState(()=> {
            return {Details:theProduct}
        })
     }
     
     addToCart = (id) => {
         let temproducts = [...this.state.Products];
         const index = temproducts.indexOf(this.getItem(id));
         const product = temproducts[index];
         product.inCart = true;
         product.count = 1;
         const price = product.price;
         product.total = price
         this.setState(() => {
             return {Products : temproducts , Cart : [...this.state.Cart , product]}
         },() => {
           this.addTotal()
         })
     }

     editarray = () => {
        let temproduct = [];
        storeProducts.forEach(item => {
            const dataItem = {...item};
            temproduct = [...temproduct, dataItem]
        })

        this.setState(()=> {
            return {Products:temproduct}
        })
     }
     
     opentheModel = (id) => {
         const theModel = this.getItem(id);
         this.setState(() => {
             return {myModel : theModel , openModel:true}
         })
     }

     closeModel = () => {
         this.setState(() => {
             return {openModel : false}
         })
     }

     increase = (id) => {
         let cartItem = [...this.state.Cart];
        const item = cartItem.find(item => item.id == id)
         item.count = item.count + 1;
         item.total = item.price  * item.count;
         console.log(item)
         this.setState(() => {
             return {Cart : [...cartItem]}
         },  () => {
            this.addTotal()
        })
     }

     decrease = (id) => {
        let cartItem = [...this.state.Cart];
        const item = cartItem.find(item => item.id == id);
         if(item.count >= 2){
            item.count = item.count - 1;
            item.total = item.total - item.price;
            this.setState(() => {
                return {Cart : [...cartItem]}
            } , () => {
                this.addTotal()
            })
         }else {

             return null
         }
     }

     removeItem = (id) => {
        const product = [...this.state.Cart];
        const myFilter = product.filter(item => item.id !== id);
        const myProducts = [...this.state.Products];
        const index = myProducts.indexOf(this.getItem(id))
        const item = myProducts[index];
        item.inCart = false;
        item.count = 0;

        this.setState(() => {
            return {Cart : myFilter,Products : myProducts ,openModel : false}
        
        } , () => {
            this.addTotal()
        })

     }

     removeModel = () => {
         
     }
     
     addTotal = () => {
       let supTotal = 0;
       this.state.Cart.map(item => supTotal += item.total);
       const tembtax = supTotal * 0.1;
       const tax = parseFloat(tembtax.toFixed(2));
       const total = supTotal + tax;

       this.setState({
        cartSupTotal:supTotal,
        cartTax:tax,
        cartTotal:total
       })

     }

     clearcart = () => {
         let myproducts = this.state.Cart;
         const data = myproducts.map(item => {
             item.inCart = false
         })
         this.setState({
             Cart : []
         })
     }
    
     componentDidMount(){
        this.editarray();
    }

    render() {
        return (
            <ProductProvider value={{...this.state ,
             handelItem:this.handelItem ,
             addToCart:this.addToCart,closeModel:this.closeModel
             ,opentheModel:this.opentheModel , increase:this.increase , decrease:this.decrease ,
             removeItem : this.removeItem ,clearcart:this.clearcart}}>
                {this.props.children}
            </ProductProvider>
        );
    }
}

export { ProductContext , ProductConsumer }