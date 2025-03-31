import React, { useEffect, useState } from 'react';
import "./Product.css";
import Nav from '../../components/nav/Nav';
import Search from '../../components/search/Search';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import instance from "../../api/axios"

import { IoIosArrowForward } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Product = () => {
  const dispatch = useDispatch()
  const [productAmount, setProductAmount] = useState(1)
  const [singleProductData, setSingleProductData] = useState({})
  const [activeImageNumber, setActiveImageNumber] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  let productViewURL = useParams("")

  useEffect(() => {
    instance(`/product/single-product/${productViewURL.id}`)
      .then(response => setSingleProductData(response.data?.singleProduct[0]))
  }, [productViewURL.id])

  function increment() {
    if (productAmount < +singleProductData?.productSizesAndQuantity?.[selectedVariant].quantity) {
      setProductAmount(productAmount + 1)
    }
  }

  function decrement() {
    if (productAmount > 1) {
      setProductAmount(productAmount - 1)
    }
  }

  // console.log(singleProductData)

  function addToCard(productData) {
    const { productSizesAndQuantity, ...rest } = productData;
    rest.selectedType = productSizesAndQuantity[selectedVariant];
    rest.count = productAmount;
    rest.totalPrice = singleProductData?.productSizesAndQuantity?.[selectedVariant].price * productAmount;
      dispatch({ product: rest, type: "ADD_TO_CART" })
    // console.log(rest)
  }


  return (
    <div className='product-view'>
      <Nav />
      <Search />
      <div className="container">
        <div className="main-flex product-wrapper">

          <div>
            <img className='product-img' src={singleProductData?.productImages?.[activeImageNumber]} alt="" />
            <div className="product-view__images">
              {
                singleProductData?.productImages?.map((productImageThumb, ind) =>
                  <img key={uuidv4()} width={100} style={ind === activeImageNumber ? { border: "2px solid dodgerblue" } : null} src={productImageThumb} alt='' onClick={() => { setActiveImageNumber(ind) }} className='product-small__img' />
                )
              }
            </div>
          </div>

          <div className='product-details'>

            <h1 className='productView-title'>{singleProductData?.productName_uz}</h1>

            <div className="product-type">
              <p>{singleProductData?.productMainCategory_uz}</p>
              <IoIosArrowForward />
              <p>{singleProductData?.productSubCategory_uz}</p>
            </div>

            <div className="wrapper flex">

              <div className="product-cost__quantity">
                <p className='product-quantity'>Омборда: {singleProductData?.productSizesAndQuantity?.[selectedVariant].quantity}</p>
                <p className='product-price'>{singleProductData?.productSizesAndQuantity?.[selectedVariant].price} SUM</p>
              </div>
              <div className="product-view__select">
                <div className="flex">
                  <p>Ўлчам:</p>
                  <select key={uuidv4()} name="" id="" className='product-view__sizeselect' onChange={(e) => {
                    setSelectedVariant(+e.target.value);
                    setProductAmount(1);
                  }}>
                    {
                      singleProductData?.productSizesAndQuantity?.map((i, index) =>
                        <>
                          <option key={uuidv4()} value={index} className='product-size'>{i.size}</option>
                        </>
                      )
                    }
                  </select>
                </div>
              </div>
            </div>


            <div className="product-view__desc">
              {
                singleProductData?.productDescription_uz?.map(i =>
                  <>
                    <p className='product-desc__item'> - {i}</p>
                  </>
                )
              }
            </div>

            <div className='purchase'>
              <div className="flex">
                <div className='item'>
                  <p>Сони:</p>
                  <div className="flex">
                    <div className="counter">
                      <button onClick={decrement}>-</button>
                      <strong>{productAmount}</strong>
                      <button onClick={increment}>+</button>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <p>Умумий нархи:</p>
                  {/* <button>{singleProductData?.productSizesAndQuantity?.price?.[0]}</button> */}
                  <button className='total-price'>{productAmount * singleProductData?.productSizesAndQuantity?.[selectedVariant].price} SUM</button>
                </div>
                {/* <button> <FaCartShopping /> Саватга қўшиш</button> */}
              </div>
            </div>
            <button className='add-tocart' onClick={() => addToCard(singleProductData)}> <FaCartShopping />Саватга қўшиш</button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Product
