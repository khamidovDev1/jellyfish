import React from 'react'
import style from "./Contact.module.scss"

function Contact() {
    return (
        <div className={style.contact}>
            <div className={style.contact_div}>
                <h1>
                    Contact
                </h1>
                <div className={style.contact_div1}>
                    <p>If you have any questions about our company or our business, please contact us from here.</p>
                    <p>We are a small operation and work from home. If you have any questions, please contact us by phone.</p>
                    <p>Also, due to the fact that our call center is outsourced, we are not able to provide an immediate response. Please understand this in advance.</p>
                </div>
                <div className={style.contact_footer}>
                    <div className={style.contact_footer_btn}>
                        <h2>Inquiry by form</h2>
                        <div>
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className={style.contact_footer_div2}>
                        <h3>Contact us by phone</h3>
                        <h1>03-5437-0135</h1>
                        <h3>Weekdays 9:30~18:30</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact