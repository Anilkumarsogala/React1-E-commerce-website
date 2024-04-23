import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const nav = ({searchbtn}) => {
  const [search,setSearch]=useState()
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <>
        <div className='free'>
       
            <div className='icon'>
            <i class="fa-solid fa-truck"></i>
              </div>
              <p>FREE Shipping when shopping upto $1000</p>
        </div>
        <div className='main_header'>
            <div className='container'>
                <div className='logo'>
                    <img src='./img/logo.svg' alt="logo"></img>
                </div>
                  <div className='search_box'>
                    <input type='text' value={search} placeholder='Enter The Product Namee' autoComplete='off' onChange={(e)=>setSearch(e.target.value)}></input>
                    <button onClick={()=>searchbtn(search)}>Search</button>
                  </div>
                    <div className='icon'>
                      {
                        isAuthenticated&&    <div className='acount'>
                        <div className='user_icon'>
                        <i class="fa-regular fa-user"></i>
                        </div>
                            <p>Hello,{user.name}</p>  {/* user.name for the your login name comes from auth0 */}
                    </div>
                      }
                         {/* if isAuthenticated is false then it shows only wishlist and car items symbols not data below 2 links */}
                    <div className='second_icon'>
                      <Link to="/" className='link'> <i class="fa-regular fa-heart"></i></Link>
                      <Link to="/Cart" className='link'><i class="fa-solid fa-bag-shopping"></i></Link>
                    </div>
                  </div>
              </div>
        </div>
        <div className='header'>
            <div className='container'>
              <div className='nav'>
              <ul>
                  <li>
                     <Link to="/" className='link'>Home</Link>
                  </li>
                  <li>
                     <Link to="/product" className='link'>Product</Link>
                  </li>
                  <li>
                     <Link to="/about" className='link'>About</Link>
                  </li>
                  <li>
                     <Link to="/contact" className='link'>Contact</Link>
                  </li>
              </ul>
              </div>

              <div className='auth'>
                {
                  isAuthenticated?<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><i class="fa-solid fa-outdent"></i></button>
                  :
                  <button onClick={()=>loginWithRedirect()}><i class="fa-solid fa-right-to-bracket"></i></button>
                }
                {/* if isAuthenticated is true then it show logout icon on screeen and the user email on user place bcz it is true auth0 performs it */}


              </div>
            </div>
        </div>
    </>
  )
}

export default nav