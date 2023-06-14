import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import "./languages.scss"

function Language() {
    const lang = [
        {
            id: 1,
            label: "uz",
            title: "Uzbek"
        },
        {
            id: 2,
            label: "ru",
            title: "Russian"
        },
        {
            id: 3,
            label: "en",
            title: "English"
        }
    ]
    const { i18n } = useTranslation()

    const changeLanguage = (e) => {
        let language = e.target.value
        console.log(language)
        i18n.changeLanguage(language)
    }



    return (
        <div>
            <select className='Select' name="" id="" onChange={changeLanguage}>
                {
                    lang.map(language => (
                        <option key={language.id} value={language.label}>{language.title}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Language