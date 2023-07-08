import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "./../components/header";
import Footer from "./../components/footer";

const Crafters: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Crafters</title>
            </Head>

            <div className="">

                <section className="mainSection">
                    <div className="border-cont">

                        <div className="head-container">
                            <Header/>

                            <div className="mainSection-content">
                          <span>
                              <h1 className="mainSection-title">
                                Our Crafters
                                </h1>
                          </span>
                                <img className="des-img" src="/images/team-main.png"/>
                                <img className="mob-img" src="/images/team-main-mobile.png"/>
                            </div>
                        </div>

                        <p className="scroll-down-text">Scroll For More</p>

                        <a href="#first-team-member" className="scroll-down-button">
                            <img src="/images/scroll-down.png"/>
                        </a>

                    </div>
                </section>


                <section className="crafters-section">

                    <div className="container">


                        <div className="main-block" id="first-team-member">
                            <div className="img-block">
                                <img src="/images/team-members/memb-main.png"/>
                            </div>

                            <div className="content-block">
                                <div className="text-cont">
                                    <h2>Sikander Mohammed Khan, Ph.D.</h2>
                                    <h3>Founder and Principal Patent Attorney</h3>
                                    <p>
                                        Dr. Khan is a seasoned legal professional with extensive experience in intellectual property law. He specializes in helping AI companies secure patents for their ideas and is committed to providing comprehensive and effective patent services.
                                        <br/><br/>
                                        With a strong technical background and legal expertise, he is a trusted partner for companies seeking to safeguard their AI innovations through the patent process.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="crafters-block">

                            <div className="crafter-item">
                                <div className="crafter-wrapper">
                                    <img src="/images/team-members/memb1.png"/>
                                    <div className="memb-content">
                                        <h3>
                                            John Doe, Ph.D.
                                        </h3>
                                        <h4>
                                            Senior Patent Attorney
                                        </h4>
                                        <p>
                                            John, Ph.D., is a registered patent agent who excels in preparing and prosecuting domestic and international patent applications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="crafter-item">
                                <div className="crafter-wrapper">
                                    <img src="/images/team-members/memb2.png"/>
                                    <div className="memb-content">
                                        <h3>
                                            John Doe, Ph.D.
                                        </h3>
                                        <h4>
                                            Senior Patent Attorney
                                        </h4>
                                        <p>
                                            John, Ph.D., is a registered patent agent who excels in preparing and prosecuting domestic and international patent applications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="crafter-item">
                                <div className="crafter-wrapper">
                                    <img src="/images/team-members/memb3.png"/>
                                    <div className="memb-content">
                                        <h3>
                                            John Doe, Ph.D.
                                        </h3>
                                        <h4>
                                            Senior Patent Attorney
                                        </h4>
                                        <p>
                                            John, Ph.D., is a registered patent agent who excels in preparing and prosecuting domestic and international patent applications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="crafter-item">
                                <div className="crafter-wrapper">
                                    <img src="/images/team-members/memb1.png"/>
                                    <div className="memb-content">
                                        <h3>
                                            John Doe, Ph.D.
                                        </h3>
                                        <h4>
                                            Senior Patent Attorney
                                        </h4>
                                        <p>
                                            John, Ph.D., is a registered patent agent who excels in preparing and prosecuting domestic and international patent applications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="crafter-item">
                                <div className="crafter-wrapper">
                                    <img src="/images/team-members/memb2.png"/>
                                    <div className="memb-content">
                                        <h3>
                                            John Doe, Ph.D.
                                        </h3>
                                        <h4>
                                            Senior Patent Attorney
                                        </h4>
                                        <p>
                                            John, Ph.D., is a registered patent agent who excels in preparing and prosecuting domestic and international patent applications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="crafter-item">
                                <div className="crafter-wrapper">
                                    <img src="/images/team-members/memb3.png"/>
                                    <div className="memb-content">
                                        <h3>
                                            John Doe, Ph.D.
                                        </h3>
                                        <h4>
                                            Senior Patent Attorney
                                        </h4>
                                        <p>
                                            John, Ph.D., is a registered patent agent who excels in preparing and prosecuting domestic and international patent applications.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </section>

            </div>

            <Footer/>

        </div>
    )
};

export default Crafters;