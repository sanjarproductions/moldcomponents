import React, { useEffect, useState } from 'react'
import "./MainCategory.css"
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import Sidebar from "../../components/sidebar/Sidebar"
import { useParams } from 'react-router-dom'
import instance from "../../api/axios"
import {Link} from "react-router-dom"
const MainCategory = () => {
    let mainCategoryURL = useParams("")
    const [mainCategoryData, setMainCategoryData] = useState([])
    useEffect(() => {
        instance(`category/categories/${mainCategoryURL.name}`)
            .then(response => setMainCategoryData(response.data?.maincategory))
    }, [mainCategoryURL.name])

    return (
        <div className='category__filters'>
            <Nav />
            <Search />

            <div className="container">
                <Sidebar />
                <div className="filtered-items">
                    {
                        mainCategoryData.map(i =>
                            <div className='product-filter-item'>
                                <Link to={`/product-view/${i._id}`}>
                                    <img src={i.productImages[0]} alt="" className='product-img' />
                                    <h3 className='product-title'>{i.productName_uz}</h3>
                                    <div className="product-flex">
                                        <p>{i.productMainCategory_uz}</p> <p>{i.productSubCategory_uz}</p>
                                    </div>
                                    <p>{i.productSizesAndQuantity.length > 1 ? `${i.productSizesAndQuantity[0].price} - ${i.productSizesAndQuantity[i.productSizesAndQuantity.length - 1].price}` : `${i.productSizesAndQuantity[0].price}`}</p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
            {/*  */}
        </div>
    )
}

export default MainCategory
