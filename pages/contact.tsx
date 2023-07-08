import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Contact: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>

            <div className="">

                <section className="mainSection" style={{height: "auto", minHeight: "auto", paddingBottom: "0px", borderBottom: "0px"}}>
                    <div className="border-cont" style={{paddingBottom: "0px", borderBottom: "0px"}}>

                        <div className="head-container">
                            <Header/>
                        </div>

                    </div>
                </section>

                <section className="contact-section">

                    <div className="container">

                        <div className="contact-form-block">

                            <h1>
                                <span>Contact</span> Us
                            </h1>
                            <p>
                                To get in touch with us, simply fill out the form below to inquire about a legal matter or request more information about our services. We will get back to you as soon as possible to discuss your needs and explore how we can help you achieve your goals.
                            </p>

                            <form>
                                <div className="input-center">
                                    <input type="text" name="firstname" placeholder="FIRST NAME" className="half-input"/>
                                    <input type="text" name="firstname" placeholder="LAST NAME" className="half-input"/>
                                    <input type="text" name="firstname" placeholder="BUSINESS E-MAIL" className="half-input"/>
                                    <input type="text" name="firstname" placeholder="PHONE NUMBER" className="half-input"/>
                                </div>
                                <input type="text" name="firstname" placeholder="COMPANY"/>
                                <input type="text" name="firstname" placeholder="SUBJECT"/>
                                <textarea name="message" placeholder="MESSAGE"/>

                                <button className="submit-button">SUBMIT</button>
                            </form>

                        </div>

                        <div className="info-block">

                            <h2>
                                Flagship Partners, LLC
                            </h2>

                            <div className="icons-block">
                                <div className="icon-item">
                                    <img src="/images/contact1.png"/>
                                    <p>
                                        1001, Brickell Bay, Suite 2001
                                        Los Angeles, LA 72206
                                    </p>
                                </div>
                                <div className="icon-item">
                                    <img src="/images/contact2.png"/>
                                    <p>
                                        +1 305 555 4444
                                    </p>
                                </div>
                                <div className="icon-item">
                                    <img src="/images/contact3.png"/>
                                    <p>
                                        emailexample@gmail.com
                                    </p>
                                </div>
                            </div>

                            <img src="/images/contact-side.png" className="side-image"/>

                        </div>


                        <div className="contact-footer">

                            <img src="/images/contact-footer.png"/>
                            <p>
                                At Henry Patent Law Firm, we value our clients and strive to provide the best possible service. We look forward to hearing from you and working with you to protect your intellectual property.
                                <br/><br/>
                                Thank you for considering our firm.
                            </p>

                        </div>


                    </div>

                </section>


            </div>

            <Footer/>

        </div>

    )
}

export default Contact;