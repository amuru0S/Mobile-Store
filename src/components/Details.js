import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom' 
import { ButtonContainer } from './Button'
import styled from 'styled-components'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=> {
          const { id, title, company, img, price, info, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
            
            {/* Begin title styling */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1> {title} </h1>
                </div>
              </div>
            {/* End title styling*/}
            {/* Product info styling*/}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} alt="product" className="img-fluid"
                />
              </div>
              { /* Product info text styling */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2> model: {title} </h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span className="text-uppercase"> 
                   {company} </span>
                </h4>
                <h4 className="text-blue">
                <strong>
                  price: <span> $ </span>
                  {price}
                </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  product info:
                </p>
                <p className="text-muted lead">
                  {info}
                </p>
                {/* Buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      Back to Products
                    </ButtonContainer>
                  </Link>
                    <ButtonContainer
                    cart
                    disabled = {inCart ? true : false}
                    onClick = {() => {
                      value.addToCart(id)
                    }}
                    >
                      {inCart ? "inCart" : "Add to Cart"}
                    </ButtonContainer>
                </div>
              </div>
            </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
