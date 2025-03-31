import { useState, useEffect } from 'react'
import "./Search.css"
import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import MainLogo from "../../assets/main-logo.svg";
import instance from "../../api/axios";

const Search = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        instance(`product/search/${inputSearch}`)
            .then(response => setSearchResults(response.data))
            .catch(err => {
                setSearchResults([])
            })
    }, [inputSearch])


    return (
        <>
            <div className="search">
                <div className="container">
                    <div className="flex">
                        <Link to={"/"} className='main-logo'>
                            <img src={MainLogo} alt="" />
                        </Link>
                        <div className='input-wrapper'>
                            <input type="text" name="" id="" placeholder='Qidirish' onChange={e => setInputSearch(e.target.value)} />
                            <button><CiSearch /></button>

                            {searchResults.length > 0 || inputSearch.length != 0 ?
                                <div className='search-results'>
                                    {
                                        searchResults?.map(searchedItem =>
                                            <>
                                                <Link to={`/product-view/${searchedItem._id}`}>
                                                    <div className="flex searched-item">
                                                        <div className='flex searched-item__title'>
                                                            <img className='search-product__image' src={searchedItem?.productImages?.[0]} alt="" />
                                                            <h4>{searchedItem.productName_uz}</h4>

                                                        </div>
                                                        <p>{searchedItem.productSizesAndQuantity.length > 1 ? `${searchedItem.productSizesAndQuantity[0].price} - ${searchedItem.productSizesAndQuantity[searchedItem.productSizesAndQuantity.length - 1].price} SUM` : `${searchedItem.productSizesAndQuantity[0].price} SUM`}</p>
                                                    </div>
                                                </Link>
                                            </>
                                        )
                                    }

                                    {searchResults.length == 0 && inputSearch.length != 0 ?
                                        <div className='notfound-img__wrapper'>
                                            <img src='https://cdn.dribbble.com/userupload/2905383/file/original-4ea237e94e803ddd575a66eb32198899.png?resize=400x0' className='not-fount__message' />
                                        </div>

                                        : null}

                                </div> : <></>
                            }

                        </div>
                    </div>
                </div>

                <div className="links">
                    <div className="container">
                        <Link to="/">Бош сахифа</Link>
                        <Link to="/about">Биз ҳақимизда</Link>
                        <Link to="/contact">Алоқа</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
