import React from 'react'
import style from "./Main.module.scss"
import { useTranslation } from 'react-i18next'

function Main() {
    const { t } = useTranslation()

    return (
        <div className={style.main}>
            <div className="">
                <h1>{t("Our vision statement")}</h1>
                <p>
                    {t("We believe that breakthrouths come either from new knowledge or new experiences.At Jellyfish, we strive to broaden your viewpoint.")}
                </p>

            </div>
        </div>
    )
}

export default Main