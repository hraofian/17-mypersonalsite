import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <div>
        <ul style={{flexBasis: "auto"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/servises">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    </div>
  )
}

export default Product