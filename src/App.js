import React,{useState} from 'react'
import Nav from './nav'
import {BrowserRouter} from 'react-router-dom';
import Rout from './rout';
import Footer from './footer';
import Productdetails from './productdetails';
const App = () => {
   //cart section
   const [cart,setCart]=useState([])


  //when product clearly open then if we want to close then we use this usestate
  const [close,setClose]=useState(false)
   

  //Product details
  const [detail,setDeatail]=useState([])
  //filter products for searching 
  const [product,setProduct]=useState(Productdetails);
  const searchbtn=(product)=>{
      const change=Productdetails.filter((x)=>{
        return x.Cat===product
      })
      setProduct(change)
  }
  //product detail view
  const view=(prodct)=>{//here the product value  taken from the eye button parameter in product.js
      setDeatail([{...prodct}])
      setClose(true)
  }
  //add to cart
  const addtocart=(product)=>
  {
    const exsit=cart.find((x)=>{
      return x.id===product.id
    })
    
    if(exsit)
    {
      alert("This Product is Already added to cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])//previous ga unna cart item alane undali so ...cart, unntadhi
      alert("Product is added to cart")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn} />
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App