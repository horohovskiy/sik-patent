import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import Link from "next/link";
import Footer from "@/components/footer";

const Crafts: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Crafts</title>
            </Head>

            <div className="">

                <section className="mainSection" style={{height: "auto", minHeight: "auto", paddingBottom: "0px", borderBottom: "0px"}}>
                    <div className="border-cont" style={{paddingBottom: "0px", borderBottom: "0px"}}>

                        <div className="head-container">
                            <Header/>
                        </div>

                    </div>
                </section>

                <section className="crafts-section">

                    <div className="container">

                        <div className="service-block">

                            <h1>
                                All services<br/>
                                you need<br/>
                                for your Ip
                            </h1>

                            <p>
                                Flagship Patents provides a full range of services to help you protect your valuable ideas.
                                <br/><br/>
                                We represent leading innovators with advanced credentials and significant industry experience, and they trust us to protect their most valuable and complex inventions.
                                <br/><br/>
                                Using our decades of legal expertise, we will build a custom strategy to protect and optimise your intellectual property assets. We offer global patent portfolio development and management for start-ups and established companies.
                            </p>

                            <img src="/images/lock-crafts.png"/>

                        </div>

                        <div className="download-section">

                            <div className="dl-item">
                                <h2>
                                    Patent preparation
                                </h2>
                                <p className="description">
                                    We create effective patents for IT companies working in AI. Our team of expert attorneys and agents understands the nuances of AI technology and works closely with clients to provide maximum protection with minimal limitations. Gain a competitive edge in the ever-changing world of AI with our patent solutions.
                                </p>
                                <Link href="/" className="link">Read more</Link>
                                <p className="border-par">
                                    What are the main steps you need to pass?
                                </p>
                                <button>
                                    download free ebook
                                </button>
                            </div>

                            <div className="dl-item">
                                <h2>
                                    Patent preparation
                                </h2>
                                <p className="description">
                                    We create effective patents for IT companies working in AI. Our team of expert attorneys and agents understands the nuances of AI technology and works closely with clients to provide maximum protection with minimal limitations. Gain a competitive edge in the ever-changing world of AI with our patent solutions.
                                </p>
                                <Link href="/" className="link">Read more</Link>
                                <p className="border-par">
                                    What are the main steps you need to pass?
                                </p>
                                <button>
                                    download free ebook
                                </button>
                            </div>

                            <div className="dl-item">
                                <h2>
                                    Patent preparation
                                </h2>
                                <p className="description">
                                    We create effective patents for IT companies working in AI. Our team of expert attorneys and agents understands the nuances of AI technology and works closely with clients to provide maximum protection with minimal limitations. Gain a competitive edge in the ever-changing world of AI with our patent solutions.
                                </p>
                                <Link href="/" className="link">Read more</Link>
                                <p className="border-par">
                                    What are the main steps you need to pass?
                                </p>
                                <button>
                                    download free ebook
                                </button>
                            </div>

                        </div>

                        <div className="property-section">

                            <h2>your intellectual property IN safe hands </h2>


                            <div className="prop-block">

                                <div className="prop-item">
                                    <img src="/images/prop1.png"/>
                                    <h3>
                                        Provisional Patents
                                    </h3>
                                    <p>
                                        A provisional patent establishes an early filing date for an invention and provides a one-year window to file a regular patent application, often used to secure intellectual property rights.
                                    </p>
                                </div>

                                <div className="prop-item">
                                    <img src="/images/prop2.png"/>
                                    <h3>
                                        Global IP Management
                                    </h3>
                                    <p>
                                        A provisional patent establishes an early filing date for an invention and provides a one-year window to file a regular patent application, often used to secure intellectual property rights.
                                    </p>
                                </div>

                                <div className="prop-item">
                                    <img src="/images/prop3.png"/>
                                    <h3>
                                        IP Infringement
                                    </h3>
                                    <p>
                                        A provisional patent establishes an early filing date for an invention and provides a one-year window to file a regular patent application, often used to secure intellectual property rights.
                                    </p>
                                </div>

                            </div>

                        </div>


                    </div>

                </section>


            </div>

            <Footer/>

        </div>
    )
}

export default Crafts;