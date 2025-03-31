import React from 'react'
import "./Orders.css"
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const navigate = useNavigate()
  // navigate("/admin/orders/all")
  return (
    <div className='admin-nav__wrapper'>
      <nav className='admin-orders__nav'>
        <ul>
          <li>
            <Link to={"/admin/orders/all"}>All</Link>
          </li>
          <li>
            <Link to={"/admin/orders/contacted"}>Contacted</Link>
          </li>
          <li>
            <Link to={"/admin/orders/not-contacted"}>Not Contacted</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Orders
