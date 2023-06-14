import React from 'react'
import style from "./Main2.module.scss"
import { useTranslation } from 'react-i18next'

function Main2() {
    const { t } = useTranslation()

    return (
        <div id='misson' className={style.main2}>
            <div className="">
                <h1>{t("Mission")}</h1>
                <div className="">
                    <p>{t("To provide fair opportunity to people all over the world.")}</p>
                    <p>{t("Not only in Japan, there is a huge disparity in opportunity distribution all")}</p>
                    <p>{t("over the world.")}</p>
                    <p>{t("Our mission is to create opportunities to everyone, regardless of")}</p>
                    <p>{t("nationality, ethnicity, religion, culture and physical features.")}</p>
                </div>
            </div>
        </div>
    )
}

export default Main2