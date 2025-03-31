import React from 'react'
import "./Sidebar.css"
import { useEffect, useState } from 'react'
import instance from "../../api/axios"
import CategoryIcon from "../../assets/categoryIcon.svg"

import { Link } from "react-router-dom"

const Sidebar = () => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        instance("/category/category-nest")
            .then(response => setCategoryData(response.data))
    }, [])
    // console.log(categoryData)

    return (
        // <div className="container">
        <div className='sidebar'>
            <ul className='sidebar-ul'>

                <li className='sidebar-link'>
                    <img src={CategoryIcon} alt="" />
                    <p>Kategoriyalar</p>
                </li>
                {
                    categoryData.mainCategory_uz?.map((i, index) => (
                        <li className='sidebar-link' key={index}>
                            <Link className='maincategory' to={`/maincategory/${i}`}>{i}</Link>
                            <div className="sub-category-item">
                                {
                                    categoryData.productSubCategories_uz[index].map((subItem, idx) => (
                                        <Link className='subcategory' to={`/subcategory/${subItem}`} key={idx}>{subItem}</Link>
                                    ))
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        // </div>
    )
}

export default Sidebar


