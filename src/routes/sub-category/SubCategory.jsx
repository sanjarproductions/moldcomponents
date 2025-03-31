import React, { useEffect, useState } from 'react'
import "./SubCategory.css"
import "../main-category/MainCategory.css"
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import { useParams } from 'react-router-dom'
import instance from "../../api/axios"
import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'

const SubCategory = () => {

    let subCategoryURL = useParams();
    const [subCategoryData, seSubCategoryData] = useState([]);

    useEffect(() => {
        instance(`/category/subcategories/${subCategoryURL.name}`)
            .then(response => seSubCategoryData(response.data.subCategory))
    }, [subCategoryURL.name])

    return (
        <div className='category__filters'>
            <Nav />
            <Search />
            <div className="container">
                <Sidebar />
                <div className="filtered-items">
                    {
                        subCategoryData.map(i =>
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
        </div>
    )
}

export default SubCategory
