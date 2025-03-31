import { useState, useEffect, Fragment } from 'react'
import instance from '../../api/axios';
import { v4 as uuidv4 } from 'uuid';
import ProductSlider from '../product-slider/ProductSlider';
import "./Main.css"
import { useSelector } from 'react-redux';

const Main = () => {
    const currentLng = useSelector(state => state.language.lang)
    // console.log(currentLng)

    const [homeReelData, setHomeReelData] = useState([])
    useEffect(() => {
        instance("/category/category-reel")
            .then(response => setHomeReelData(response.data))
    }, [])

    return (
        <>
            <div className="main-container">
                {
                    homeReelData.slice(0, 4).map(i =>
                        <Fragment key={uuidv4()}>
                            <strong className='category-name'>{currentLng === "uz" ? i.categoryName_uz : i.categoryName_ru}</strong>
                            <ProductSlider categoryData={i} />
                        </Fragment>
                    )
                }
            </div>
        </>
    )
}

export default Main
