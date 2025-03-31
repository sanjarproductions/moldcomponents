import React, { useState } from 'react'
import "./Nav.css"
import i18n from "../../language/i18next"
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Nav = () => {
    const [lang, setLang] = useState(localStorage.getItem("lang") || "uz")
    const dispatch = useDispatch();
    const { t } = useTranslation();

    function changeLang(selectedLang) {
        i18n.changeLanguage(selectedLang)
        setLang(selectedLang)

        dispatch({
            language_code: selectedLang, type:"CHANGE_LANGUAGE"
        })
    }

    return (
        <nav>
            <div className="container">
                <div className="flex">
                    <div className='flags'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1200px-Flag_of_Uzbekistan.svg.png" alt="" width="50" height="30" style={{ marginRight: 15 + "px" }} onClick={() => changeLang("uz")} />
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="" width="50" height="30" onClick={() => changeLang("ru")} />
                    </div>
                    <div className='contact'>
                        <FaPhoneAlt />
                        <a href="tel:+998911860085">+998 91 186 00 85</a>
                    </div>
                    <div className='contact'>
                        <IoMdMail />
                        <a href="mailto:erkinjon.hodjaev@gmail.com">erkinjon.hodjaev@gmail.com</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
