import React from 'react'
import Productdetails from './productdetails'
import './product.css'
import { useAuth0 } from "@auth0/auth0-react";
const Product = ({product,setProduct,detail,view,close,setClose,addtocart}) => {
    const { loginWithRedirect,isAuthenticated} = useAuth0();
    const filterProducts=(p)=>{
        const update=Productdetails.filter((x)=>{
            return x.Cat===p;
        })
        setProduct(update);
    }
    const AllProduccts=()=>{
        setProduct(Productdetails)
    }
  return (
    <>
    {
        close?<div className='product_detail'> {/*fast true untadhi html execute avthadhi next wrong button click chesaka false aithdi so html execute kad*/}
        <div className='container'>
            <button onClick={()=>setClose(false)} className='closebtn'><i class="fa-regular fa-circle-xmark"></i></button>
            {
                detail.map((curElm)=>{
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>A Screen Everyone will Love:When your family is streaming or Video chatting with friends tablet A8..</p>
                                <h3>${curElm.Price}</h3>
                                <button onClick={()=>addtocart(curElm)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'>

            </div>
        </div>
    </div>:null
    }
    <div className='products'>
    <h2># Products</h2>
        <p>Home.Products</p>
            <div className='container'>
                <div className='filter'>
                    <div className='categories'>
                        <h3>Categories</h3>
                        <ul>
                            <li onClick={()=>AllProduccts()}>AllProduccts</li>
                            <li onClick={()=>filterProducts("Tablet")}>Tablet</li>
                            <li onClick={()=>filterProducts("Smart Watch")}>Smart Watch</li>
                            <li onClick={()=>filterProducts("Headphone")}>Headphone</li>
                            <li onClick={()=>filterProducts("Camera")}>Camera</li>
                            <li onClick={()=>filterProducts("Gaming")}>Gaming</li>
                        </ul>
                    </div>
                </div>
                <div className='productbox'>
                    <div className='constant'>
                      
                        {
                            product.map((curElm)=>{
                                return(
                                  <>
                                 <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                        <div className='icon'>
                                            {
                                                isAuthenticated?
                                                <li onClick={()=>addtocart(curElm)}> <i class="fa-solid fa-cart-arrow-down"></i></li>
                                                :
                                                <li onClick={()=>loginWithRedirect()}> <i class="fa-solid fa-cart-arrow-down"></i></li>
                                            }
                                            
                                            <li onClick={()=>view(curElm)}><i class="fa-solid fa-eye"></i></li>  {/*//array lo una index 1 motham vasthadhi click cheyyagane */}
                                            <li><i class="fa-regular fa-heart"></i></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>${curElm.Price}</h4>
                                    </div>
                                 </div>
                                  
                                  </>
                                      
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product