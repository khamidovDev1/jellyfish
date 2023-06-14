import React, { useState } from 'react'
import style from "./SiteBar.module.scss"
import logo from "../../images/logo.png"
import { FiChevronRight } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import Language from '../../language/Language'
import { useTranslation } from 'react-i18next'

function Sitebar() {
    const { t } = useTranslation()


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
                    <li><a href="#misson">{t("About JELLYFISH")}</a></li>
                    <li><a href="/">{t("Company")}</a></li>
                    <li><a href="#service">{t("Service")}</a></li>
                </ul>
                <div className={style.btns}>
                    <button><a href="">{t("Recruit")}<FiChevronRight /></a></button>
                    <button><a href="">{t("Contact")}<FiChevronRight /></a></button>
                </div>
                <div className={style.lenguage}>
                    <h1><Language /></h1>
                </div>
            </div>
            <div className={style.bars}>
                <FaBars onClick={showNav} />

                {
                    getOpen && (
                        <div className={style.bars_menu}>
                            <ul>
                                <li><a href="/">{t("About JELLYFISH")}</a><span><AiOutlinePlus onClick={showNav} className={style.sitebar_bars} /></span></li>
                                <li><a href="/">{t("Company")}</a></li>
                                <li><a href="/">{t("Service")}</a></li>
                                <Language />
                            </ul>
                        </div>
                    )
                }
            </div>


        </div>
    )
}
export default Sitebar