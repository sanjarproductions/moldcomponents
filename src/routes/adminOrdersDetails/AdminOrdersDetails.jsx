import React from 'react'
import "./AdminOrdersDetails.css"
import { useEffect, useState } from 'react'
import instance from "../../api/axios"
import { useParams } from 'react-router-dom'

import { FaPhone } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const AdminOrdersDetails = () => {
    let { status } = useParams()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        instance("order/all-orders", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("admin-auth-token")
            }
        })
            .then(response => setOrders(response.data.allOrders))
            .catch(err => console.log(err))
    }, [])

    let contactedFilter = orders?.filter(item => item.contacted === true)
    let notContactedFilter = orders?.filter(item => item.contacted === false)
    console.log(orders)

    return (
        <div className='orders-container'>
            {
                status === "contacted" ? (
                    contactedFilter.map(orderItem => (
                        <div className="order-item">

                            <div className="flex">
                                <div className="cart-icon"></div>
                                <div className="box">
                                    {orderItem.contacted ? <p>Contacted</p> : <p>Not Contacted</p>}
                                    <p key={orderItem._id}>{orderItem.fullname}</p>
                                    <p>{orderItem.phonenumber}</p>
                                </div>
                                <div className="phone-icon"></div>
                            </div>

                            <div className="">
                                <p>Date: {orderItem.orderedAt}</p>
                                <p>Amount: {orderItem.orderedproducts.length}</p>
                            </div>

                            <div className="">
                                <button>Contacted</button>
                                <button>Delete Order</button>
                            </div>
                        </div>
                    ))
                ) : status === "all" ? (
                    orders.map(orderItem => (
                        <div className="order-item">

                            <div className="flex">
                                <div className="cart-icon">
                                    <FaCartShopping className='admin-cart__icon' />
                                </div>
                                <div className="box">
                                    <p key={orderItem._id}>{orderItem.fullname}</p>
                                    <p>{orderItem.phonenumber}</p>
                                    {orderItem.contacted ? <p>Contacted</p> : <p>Not Contacted</p>}
                                </div>
                                <FaPhone />
                            </div>

                            <div className="">
                                <p>Date: {orderItem.orderedAt}</p>
                                <p>Amount: {orderItem.orderedproducts.length}</p>
                            </div>

                            <div className="">
                                <button>Contacted</button>
                                <button>Delete Order</button>
                            </div>
                        </div>
                    ))
                ) : (
                    notContactedFilter.map(orderItem => (
                        <p key={orderItem._id}>{orderItem.fullname}</p>
                    ))
                )
            }
        </div>
    )
}

export default AdminOrdersDetails
