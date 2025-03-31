// import React from 'react'

import Nav from "../../components/nav/Nav"
import Search from "../../components/search/Search"

import "./About.css"

const About = () => {
  return (
    <>
      <Nav />
      <Search />
      <div className="container">
        <h1 className="about-title">Биз хақимизда</h1>
        <p>Ассалому алайкум! Сизларга шуни маълум киламизки Наманганда махсус қолип пресс-формаларни ясашда ва ишлатишдафойдаланиладиган асбоб-ускуна инструментлар дукони очилди! Биз сизга буюртма асосида, хам сизга керакли булган нарсаларни тез ваарзон нархларда етказиб берамиз.</p>
        <br />
        <br />
        <img src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/office-min%202.153cd0976584138310b4.jpg" alt="" width={100 + "%"} />
        <br />
        <br />
        <span>Металга ишлов берувчи асбоблар (Оправкалар, фрезалар ва хоказолар)</span>
        <span>Пластмасса махсулотлари қуйиш учун ускуналар (Термопластавтоматлар ва қолиплар).</span>
        <span>Пластмасса махсулотлари қуйиш учун ускуналар (Термопластавтоматлар ва қолиплар).</span>
        <span>Пластмасса қолиплари ва штамплар учун бутловчи кисмлар (Летниклар, толкателлар, пружиналар)</span>
        <span>Қолип (пресс-форма) учун керак буладиган мойлар (Mold release , Mold cleaning , Anti rust).</span>
        <span>Эрозия йули билан металга ишлов берувчи ускуналар (WIRE EDM, SPARK EDM, SUPER DRILL).</span>
        <span>Металга ЧПУ бошкаруви оркали ишлов берувчи ускуналар (VMC CNC)</span>
      </div>

    </>
  )
}

export default About
