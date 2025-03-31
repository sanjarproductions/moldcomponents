import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import validateToken from '../../helpers/validate-token'

const Private = () => {
    const { token } = useSelector(state => state.login)

    return token ? (
        <Outlet />
    ) : <Navigate to={"/login"} />
}

export default Private
