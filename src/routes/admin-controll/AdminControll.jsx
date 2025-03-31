import React from 'react'
import "./AdminControll.css"
import { useEffect, useState } from 'react'
import instance from "../../api/axios"

const AdminControll = () => {
  const [controllProducts, setControllProducts] = useState([])

  useEffect(() => {
    instance("order/all-orders", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("admin-auth-token")
      }
    })
      .then(response => setControllProducts(response.data.allOrders))
      .catch(err => console.log(err))
  }, [])

  console.log(controllProducts)
  return (
    <div>
      Controll

      {controllProducts.map(orderItem => (
        <p key={orderItem._id}>{orderItem.fullname}</p>
      ))}
    </div>
  )
}

export default AdminControll
