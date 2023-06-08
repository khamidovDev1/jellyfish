import React from 'react'
import style from "./Footer.module.scss"
import footer_logo from "../../images/footLogo.png"

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footer_div}>
                <div className={style.footer_div1}>
                    <p>Service</p>
                    <hr />
                    <p>Recruit</p>
                    <hr />
                    <p>Company</p>
                    <hr />
                    <p>Contact</p>
                </div>
                <div className={style.footer_logo}>
                    <img src={footer_logo} alt="" />
                </div>
                <div className={style.footer_div2}>
                    <p>JELLYFISH,Inc.</p>
                    <p>WESTHILL 4F, 2-24-4,Nishigotanda,shinagawa-ku,Tokyo 141-0031,JAPAN
                    </p>
                    <p>phone: 03-5437-0135</p>
                </div>
            </div>
        </div>
    )
}

export default Footer