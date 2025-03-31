import React from 'react'
import "./SidebarAdmin.css"
import { Link } from 'react-router-dom'
import Logo from "../../assets/main-logo.svg"
import Icon from "../../assets/admin-sidebar.jpg"
import { useDispatch } from 'react-redux'

const SidebarAdmin = () => {
  
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch({ type: "LOGOUT" })
  }

  return (
    <div className='admin-sidebar'>
      <div className="logo-wrapper">
        <img src={Logo} alt="" />
      </div>

      <div className="badge">
        <div className="badge-icon">
          <img src={Icon} alt="" className='badge-icon' />
        </div>
        <div className="text">
          <strong>6270F64B</strong>
          <p>Admin</p>
        </div>
      </div>
      <div className="admin-links">
        <Link to={"/admin/orders"}>Orders</Link>
        <Link to={"/admin/controll"}>Controll</Link>
        <button className='logout-btn' onClick={signOut}>Log Out</button>
      </div>
    </div>
  )
}

export default SidebarAdmin
