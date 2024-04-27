import React from 'react'
import {Link } from 'react-router-dom'
import Homeproduct from './homeproduct';
import './home.css';
const Home = ({detail,view,close,setClose,addtocart}) => {
  return (
    // below content for full view of the product and closing the product related content
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
                                <h3>{curElm.Price}</h3>
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
        <div className='top_banner'>
            <div className='container'>
                <div className='detail'>
                    <h2>The Best Note Book Collection 2023</h2>
                    <Link to='/product' className='link'>Shop Now<i class="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className='img_box'>
                    <img src='./img/slider-img.svg' alt="sliding"></img>
                </div>
            </div>
        </div>
        <div className='product_type'>
            <div className='container'>
                <div className='box'>
                    <div className='img_box'>
                        <img src="./img/Mobile Phone.png" alt="mobile"></img>
                    </div>
                    <div className='detail'>
                        <p>23 Products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src="./img/smart watch.png" alt="watch"></img>
                    </div>
                    <div className='detail'>
                        <p>23 Products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src="./img/headphone.png" alt="headphone"></img>
                    </div>
                    <div className='detail'>
                        <p>52 Products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src="./img/cpu.jpg" alt="cpu"></img>
                    </div>
                    <div className='detail'>
                        <p>63 Products</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='about'>
            <div className='container'>
                <div className='box'>
                    <div className='icon'>
                    <i class="fa-solid fa-truck-droplet"></i>
                    </div>
                    <div className='detail'>
                        <h3>Free Shipping</h3>
                        <p>Oder Above $1000</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div className='detail'>
                        <h3>Return & Refund</h3>
                        <p>Money Back Gaurenty</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <i class="fa-solid fa-percent"></i>
                    </div>
                    <div className='detail'>
                        <h3>Member Discount</h3>
                        <p>On Every Order</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <i class="fa-solid fa-headphones"></i>
                    </div>
                    <div className='detail'>
                        <h3>Customer Support</h3>
                        <p>Every Time Call Support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='product'>
        <h2>Top Products</h2>
            <div className='container'>
           {/* here we are not created any array of usestate directly the data stored in homeproduct.js we can see the deatails from that we are accesing the datam from it */}
                {Homeproduct.map((curElm)=>
                {
                    return(
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    <li onClick={()=>addtocart(curElm)}> <i class="fa-solid fa-cart-arrow-down"></i></li>
                                    <li onClick={()=>view(curElm)}><i class="fa-solid fa-eye"></i></li>
                                     <li><i class="fa-regular fa-heart"></i></li>
                                </div>
                            </div> 
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>${curElm.Price}</h4>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='banner'>
            <div className='container'>
            <div className='detail'>
                <h4>LATEST TECHNOLOGY ADDED</h4>
                <h3>Apple iPad 10.2 9th Gen-2021</h3>
                <p><i class="fa-solid fa-dollar-sign"></i>986</p>
                <Link to='./product' className='link'>Shop Now</Link>
            </div>
            <div className='img_box'>
                <img src="./img/slider-img.png" alt="slideing"></img>
            </div>
            </div>
        </div>
    </>
  )
}

export default Home
