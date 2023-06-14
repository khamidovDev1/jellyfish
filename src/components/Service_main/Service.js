import React from 'react'
import style from "./Service.module.scss"
import { useTranslation } from 'react-i18next'

function Service() {
    const { t } = useTranslation()
    return (
        <div id='service' className={style.service}>
            <div className={style.service_div}>
                <h1 >{t("Service")}</h1>
                <p>{t("JELLYFISH has been developing business in various areas including education, employment management both in Japan and overseas. We understand how the development of technological innovations such as AI and loT is happening at a drastic pace. By incorporating new technologies to different areas, we will continue to provide and create great opportunities to help bring the ideal world for everyone to come true.")}
                </p>
                <div className={style.service_div_divs}>
                    <div className={style.resources}>
                        <h1>{t("Human Resources")}</h1>
                        <p>{t("Our recruitment system for IT engineers aims to support mid-stage startups and companies that are growing fast in the IT venture. We provides all-round support for IT engineers through direct recruitment using SNS in various countries.")}</p>
                        <a href="">{t("For further information, click here")}</a>
                    </div>
                    <hr />
                    <div className={style.education}>
                        <h1>{t("Education")}</h1>
                        <p>{t("In order to improve the corporate clients’ Japanese speaking skills, we work on the foundation and development of online programs of Japanese language education. Consultants help business with common areas such as studying abroad in Japan and Japanese language learning.")}
                        </p>
                        <a href="">{t("For further information, click here")}</a>
                    </div>
                    <hr />
                    <div className={style.business}>
                        <h1>{t("Investment Business")}</h1>
                        <p>{t("The company invests in technologies in early-stages in a practical and direct way. We are committed to help the hiring of IT engineers which is the main fuel for the growth of many companies. By doing so, we can increase the growth rate and the probability for success of the companies we invest in.")}</p>
                        <a href="">{t("For further information, click here")}</a>
                    </div>
                    <hr />
                    <div className={style.regional}>
                        <h1>{t("Regional Creative Business")}</h1>
                        <p>{t("OKUTAMA+ is a project in development for the community in Okutama-cho, Nishitama-gun, Tokyo. The project is designed to resuse the abandoned junior highschool buildings.")}</p>
                        <a href="">{t("For further information, click here")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service