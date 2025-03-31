import React, { useState } from 'react';
import "./Cart.css";
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import instance from '../../api/axios';
import { toast } from 'react-toastify';

const Cart = () => {
    const location = useLocation();
    const addedProducts = useSelector(state => state.cart.cartProducts);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");

    const bannedPatterns = [/^\/admin/, /^\/login/];

    function resetOrder() {
        setIsCartOpen(false)
        setClientName("")
        setClientPhone("")
        addedProducts.length = 0;
        toast.success("Yuborildi!");
    }

    const CreateOrder = async (e) => {
        e.preventDefault();

        try {
            const orderedProductIds = addedProducts.map(product => product._id); // Faqat IDlarni yuboramiz
            const response = await instance.post('/order/create-order', {
                fullname: clientName,
                phonenumber: clientPhone,
                orderedproducts: orderedProductIds,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            resetOrder()
            // console.log("Order successfully created:", response.data);

        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    return !bannedPatterns.some((pattern) => pattern.test(location.pathname)) ? (
        <div className="cart-wrapper">
            {!isCartOpen ? (
                <button onClick={() => setIsCartOpen(!isCartOpen)} className="cart-btn">
                    <p className='cart-length'>{addedProducts.length}</p><FaCartShopping />
                </button>
            ) : null}

            <div className={isCartOpen ? "cart cart--active" : "cart"}>
                <button onClick={() => setIsCartOpen(!isCartOpen)} className="close-cart__btn">
                    <IoIosClose className="close-cart__btn" />
                </button>

                <div className="cart-container">
                    {!addedProducts || addedProducts.length === 0 ? (
                        <p className="empty-cart__text">Your cart is empty</p>
                    ) : (
                        <>
                            <div className="products-wrapper">
                                {addedProducts.map((product) => (
                                    <div className="product-item" key={product._id}>
                                        <img width={150} height={150} src={product.productImages[0]} alt="" />
                                        <strong className="cart-product__title">{product.productName_uz}</strong>
                                        <b className="cart-product__price">{product.totalPrice} UZS</b>
                                    </div>
                                ))}
                            </div>
                            <form className="cart-form" onSubmit={CreateOrder}>
                                <input
                                    type="text"
                                    placeholder="Ism"
                                    required
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="+998 ( )"
                                    required
                                    value={clientPhone}
                                    onChange={(e) => setClientPhone(e.target.value)}
                                />
                                <button type="submit">Yuborish</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    ) : null;
};

export default Cart;