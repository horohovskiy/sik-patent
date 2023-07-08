import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import {useEffect} from "react";
import {NextPage} from "next";
import axios from "axios";





export default function PatentItem() {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Sikander - DEV MVP</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>


            <div className="patent-container">

                <header className="patent-header">
                    <div>
                        <button className="menu-button" tabIndex={0}>
                            <img src="/images/menu-but.png"/>
                            <span className="mobile-menu-block">
                              <a href="/" className="menu-item">Our Patents</a>
                              <a href="/" className="menu-item">Crafts</a>
                              <a href="/" className="menu-item">Stories</a>
                              <a href="/" className="menu-item">Crafters</a>
                              <a href="/" className="menu-item">Contacts</a>
                              <a href="/" className="book-link">Book Your FREE Call</a>
                          </span>
                        </button>
                        <Link href={"/"} className="header-logo">
                            <img src="/images/logo.png"/>
                        </Link>
                    </div>
                    <div className="patent-content">
                        <h2>
                            Protein Contact Maps AI
                        </h2>
                    </div>
                </header>

                <div className="patent-content">
                    <div className="left-block">
                        <div className="title-block">
                            <h2>
                                Protein Contact Maps AI
                            </h2>
                        </div>
                        <div className="text-cont" id="bord">
                            <h3>Invention</h3>
                            <p>
                                Protein Contact Maps AI uses AI to predict protein structures with high accuracy. This breakthrough technology enables scientists to better understand protein function and develop new drugs for diseases such as cancer and Alzheimer's.
                            </p>
                        </div>
                        <div className="text-cont">
                            <h3>Patent Features</h3>
                            <p>
                                Strong Detailed Claims<br/>
                                Enablement<br/>
                                Technical Specificity<br/>
                                Soft Limitations (two maximum per clause)
                            </p>
                        </div>

                        <div className="buttons-cont">
                            <a href="#1" className="link-button">
                                annotation
                            </a>
                            <a href="#2" className="link-button">
                                article
                            </a>
                            <a href="#3" className="link-button">
                                FIGURES
                            </a>
                            <a href="#4" className="link-button sp-link">
                                claims
                            </a>

                        </div>
                    </div>

                    <div className="right-block">
                        <div id="1" className="img-container">
                            <img src="/images/ex2.png"/>
                        </div>
                        <div id="2" className="img-container">
                            <img src="/images/ex1.png"/>
                        </div>
                        <div id="3" className="img-container">
                            <img src="/images/patent-base.png"/>
                        </div>
                        <div id="4" className="img-container">
                            <img src="/images/ex2.png"/>
                        </div>
                        <div id="5" className="img-container">
                            <img src="/images/patent-base.png"/>
                        </div>
                    </div>

                    <div className="mobile-footer">
                        <img src="/images/line.png"/>
                        <a href="#" className="book-call">
                            Book Your Free Call
                        </a>
                    </div>

                </div>

            </div>



            </main>
        </>
    )
}



