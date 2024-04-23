import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
const Cart = ({cart,setCart}) => {

    //increament  cart qty by one
    const incqty=(product)=>{//object return chesthadhi
        const exsit=cart.find((x)=>{
            return x.id===product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id===product.id?{...exsit,qty:exsit.qty+1}:curElm
        }))
    }

    //decreament cart qty by one
    const decqty=(product)=>{
        const exsit=cart.find((x)=>{
            return x.id===product.id
        })
        setCart(cart.map((x)=>{
            return x.id===product.id?{...exsit,qty:exsit.qty-1}:x
        }))
    }

    //removing cart item
    const removeproduct=(product)=>
    {
        const exsit=cart.find((x)=>
        {
            return x.id===product.id
        })
        if(exsit.qty>0) 
        {
            setCart(cart.filter((x)=>{
                // its working with If and without If
                    return x.id!==product.id
                }
                
            ))
        }
  

        //or
        // setCart(cart.filter((x)=>
        // {
        //   return x.id!==product.id
        // }))
    }

    //total cart price
    const Totalprice=cart.reduce((price,item)=>price+item.qty*item.Price,0)
  return (
    <>
    <div className='cartcontainer'>
        {
            cart.length===0 &&
            <div className='emptycart'>
                <h2 className='empty'>Cart is Empty</h2>
                <Link to="/product" className='emptycartbtn'>Shop Now</Link>
            </div>
        }
        <div className='constant'>
            {
                cart.map((curElm)=>{
                    return(
                        <div className='cart_item' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{curElm.Cat}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>Price:${curElm.Price}</p>
                                <div className='qty'>
                                    <button className='incqty' onClick={()=>incqty(curElm)}>+</button>
                                    <input type='text' value={curElm.qty}></input>
                                    <button className='decqty' onClick={()=>decqty(curElm)}>-</button>
                                </div>
                                <h4 className='subtotal'>Sub total:${curElm.Price*curElm.qty}</h4>
                                </div>
                                <div className='close'>
                                <button onClick={()=>removeproduct(curElm)}><i class="fa-regular fa-circle-xmark"></i></button>
                                </div>
                                </div>


                        </div>
                    )
                })
            }
        </div>
        {
            cart.length>0&&
            <>
            <h2 className='totalprice'>Total:${Totalprice}</h2>
            <button className='checkout'>Checkout</button>
            </>
        }
    </div>
    </>
  )
}

export default Cart