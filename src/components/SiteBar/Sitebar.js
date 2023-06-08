import React, { useState } from 'react'
import style from "./SiteBar.module.scss"
import logo from "../../images/logo.png"
import { FiChevronRight } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"

function Sitebar() {
    const [getOpen, setOpen] = useState(false)


    const showNav = () => {
        setOpen(!getOpen)
    }
    return (
        <div className={style.sitebar}>
            <div className={style.sitebar_div}>
                <div className={style.logo}>
                    <a href="/"><img src={logo} /></a>
                </div>
                <ul>
                    <li><a href="#misson">About JELLYFISH</a></li>
                    <li><a href="/">Company</a></li>
                    <li><a href="#service">Service</a></li>
                </ul>
                <div className={style.btns}>
                    <button><a href="">Recruit<FiChevronRight /></a></button>
                    <button><a href="">Contact<FiChevronRight /></a></button>
                </div>
                <div className={style.lenguage}>
                    <h1>Eng</h1>
                </div>
            </div>
            <div className={style.bars}>
                <FaBars onClick={showNav} />

                {
                    getOpen && (
                        <div className={style.bars_menu}>
                            <ul>
                                <li><a href="/">About JELLYFISH</a><span><AiOutlinePlus onClick={showNav} className={style.sitebar_bars} /></span></li>
                                <li><a href="/">Company</a></li>
                                <li><a href="/">Service</a></li>
                                <h1><a href="/">Eng</a></h1>
                            </ul>
                        </div>
                    )
                }
            </div>


        </div>
    )
}
export default Sitebar