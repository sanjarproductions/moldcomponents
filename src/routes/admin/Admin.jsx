import React from 'react'
import "./Admin.css"
import SidebarAdmin from '../../components/sidebar-admin/sidebarAdmin'
import { Outlet } from 'react-router-dom'

const Admin = () => {


  return (
    <div className='admin-wrapper'>
      <SidebarAdmin />
      <Outlet />
    </div>
  )
}

export default Admin
