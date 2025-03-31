// import React from 'react'
import Main from "../../components/main/Main"
import Nav from "../../components/nav/Nav"
import Search from "../../components/search/Search"
import Sidebar from "../../components/sidebar/Sidebar"
import MainSlider from "../../components/main-slider/MainSlider"
const Home = () => {
    return (
        <>
            <Nav />
            <Search />
            <div className="container">
                <div style={{ display: "flex" }}>
                    <Sidebar />
                    <MainSlider />
                </div>
            </div>

            <Main />
        </>
    )
}

export default Home
