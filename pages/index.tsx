import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import {NextPage} from "next";
import axios from "axios";

import React, { useEffect, useRef, useState } from 'react';







// export default function Home({data}) {
// const Home: NextPage<{ data: Event[] }> = ({ data }) => {
const Home: React.FC = () => {
// const Home: NextPage<Props> = ({ data }) => {

    const router = useRouter();

    // useEffect(() => {
    //     import('fullpage.js').then(fullpage => {
    //         new fullpage.default('#fullpage', {
    //             // options here
    //             autoScrolling:true,
    //         });
    //     });
    // }, []);


    // const containerRef = useRef(null);
    //
    // useEffect(() => {
    //     const container = containerRef.current;
    //     const sections = container.querySelectorAll('.section');
    //     let currentSectionIndex = 0;
    //
    //     const handleScroll = (e) => {
    //         // Calculate the current section index based on scroll position
    //         const { top } = container.getBoundingClientRect();
    //         const scrollTop = -top;
    //         const currentSection = sections[currentSectionIndex];
    //         const currentSectionTop = currentSection.offsetTop - container.offsetTop;
    //
    //         if (scrollTop > currentSectionTop + currentSection.offsetHeight) {
    //             currentSectionIndex++;
    //         } else if (scrollTop < currentSectionTop) {
    //             currentSectionIndex--;
    //         }
    //
    //         // Clamp section index to valid range
    //         currentSectionIndex = Math.max(0, Math.min(currentSectionIndex, sections.length - 1));
    //
    //         // Update container scroll position to current section
    //         container.scrollTo({
    //             top: sections[currentSectionIndex].offsetTop - container.offsetTop,
    //             behavior: 'smooth',
    //         });
    //     };
    //
    //     container.addEventListener('wheel', handleScroll);
    //
    //     return () => {
    //         container.removeEventListener('wheel', handleScroll);
    //     };
    // }, []);



    // useEffect(() => {
    //     const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;
    //     const scrollSections = document.querySelectorAll('.scroll-section');
    //     let currentIndex = 0;
    //     let scrollInterval: NodeJS.Timeout;
    //
    //     const scrollToNextSection = () => {
    //         currentIndex = (currentIndex + 1) % scrollSections.length;
    //         scrollContainer.scrollTo({
    //             top: scrollSections[currentIndex].getBoundingClientRect().top + scrollContainer.scrollTop,
    //             behavior: 'smooth',
    //         });
    //     };
    //
    //     scrollInterval = setInterval(scrollToNextSection, 5000);
    //
    //     return () => {
    //         clearInterval(scrollInterval);
    //     };
    // }, []);




    // const scrollContainerRef = useRef<HTMLDivElement>(null);
    //
    // useEffect(() => {
    //     const scrollContainer = scrollContainerRef.current;
    //
    //     const scrollSections = Array.from(document.querySelectorAll('.scroll-section'));
    //
    //     let currentIndex = 0;
    //     let scrollInterval: NodeJS.Timeout;
    //
    //     const scrollToNextSection = () => {
    //         currentIndex = (currentIndex + 1) % scrollSections.length;
    //         scrollContainer.scrollTo({
    //             top: scrollSections[currentIndex].getBoundingClientRect().top + scrollContainer.scrollTop,
    //             behavior: 'smooth',
    //         });
    //     };
    //
    //     scrollInterval = setInterval(scrollToNextSection, 5000);
    //
    //     const handleScroll = () => {
    //         const sectionTops = scrollSections.map(section => section.getBoundingClientRect().top);
    //         const currentSectionIndex = sectionTops.findIndex(top => top >= 0);
    //
    //         if (currentSectionIndex !== -1) {
    //             currentIndex = currentSectionIndex;
    //             clearInterval(scrollInterval);
    //             scrollInterval = setInterval(scrollToNextSection, 5000);
    //         }
    //     };
    //
    //     scrollContainer.addEventListener('scroll', handleScroll);
    //
    //     return () => {
    //         clearInterval(scrollInterval);
    //         scrollContainer.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);




    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) {
            return; // Exit early if scrollContainer is null
        }

        const scrollSections = Array.from(document.querySelectorAll('.scroll-section'));

        let currentIndex = 0;
        let scrollInterval: NodeJS.Timeout;

        const scrollToNextSection = () => {
            currentIndex = (currentIndex + 1) % scrollSections.length;
            scrollContainer.scrollTo({
                top: scrollSections[currentIndex]?.getBoundingClientRect().top + scrollContainer.scrollTop,
                behavior: 'smooth',
            });
        };

        scrollInterval = setInterval(scrollToNextSection, 3000);

        const handleScroll = () => {
            const sectionTops = scrollSections.map(section => section.getBoundingClientRect().top);
            const currentSectionIndex = sectionTops.findIndex(top => top >= 0);

            if (currentSectionIndex !== -1) {
                currentIndex = currentSectionIndex;
                clearInterval(scrollInterval);
                scrollInterval = setInterval(scrollToNextSection, 3000);
            }
        };

        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(scrollInterval);
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);



  return (
    <>
      <Head>
        <title>Sikander - DEV MVP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>



          {/*{data.map(( item ) => (*/}
          {/*    <div className="patentSection" key={item.id}>*/}
          {/*        {item.Title}*/}
          {/*    </div>*/}
          {/*))}*/}








          {/*    className="scroll-container patent-items container-sp"*/}

          <div className="scroll-container" ref={scrollContainerRef}>

              <section className="mainSection scroll-section">
                  <div className="border-cont">

                      <div className="head-container">
                          <header className="header">
                              <button className="mobile-menu-button" tabIndex={0}>
                                  <img src="/images/menu-but.png"/>
                                  <span className="mobile-menu-block">
                              <a href="/" className="menu-item active">Our Patents</a>
                              <a href="/" className="menu-item">Crafts</a>
                              <a href="/" className="menu-item">Stories</a>
                              <a href="/" className="menu-item">Crafters</a>
                              <a href="/" className="menu-item">Contacts</a>
                              <a href="/" className="book-link">Book Your FREE Call</a>
                          </span>
                              </button>
                              <Link className="logo" href="/">
                                  <img src="/images/logo.png"/>
                              </Link>
                              <div className="menu-block">
                                  <Link href="/" className="menu-item active">Our Patents</Link>
                                  <Link href="/" className="menu-item">Crafts</Link>
                                  <Link href="/" className="menu-item">Stories</Link>
                                  <Link href="/" className="menu-item">Crafters</Link>
                                  <Link href="/" className="menu-item">Contacts</Link>
                                  <Link href="/" className="book-link">Book Your FREE Call</Link>
                              </div>
                          </header>

                          <div className="mainSection-content">
                          <span>
                              <h1 className="mainSection-title">
                                We create<br/>
                                <span>patents </span>for<br/>
                                your It-ideas<br/>
                                that work
                                </h1>
                                <p>
                                    Every brilliant idea has to be protected
                                </p>
                          </span>
                              <a className="book-button">
                                  Book Your FREE Call
                              </a>
                              <img className="des-img" src="/images/main-image.png"/>
                              <img className="mob-img" src="/images/main-image-mobile.png"/>
                          </div>
                      </div>

                      <p className="scroll-down-text">Scroll For More</p>

                      <a href="#first-section" className="scroll-down-button">
                          <img src="/images/scroll-down.png"/>
                      </a>

                  </div>
              </section>



              <section id="first-section" className="scroll-section">
                  <div className="patentItem">
                      <div className="left-block">
                          <div className="content-container">
                              <h2>
                                  Protein Contact Maps AI
                              </h2>

                              <h3>
                                  1
                              </h3>
                              <p>
                                  The use of machine learning to predict the spatial arrangement of protein residues from their sequence information.
                              </p>
                              <img className="main-img" src="/images/patent.png"/>

                          </div>
                          <div className="patent-mob-image">
                              <img src="/images/patent-img.png"/>
                          </div>
                          <a href="/patent-item" className="learn-more">
                              Learn More
                          </a>
                      </div>
                      <div className="right-block">
                          <img src="/images/patent-img.png"/>
                      </div>
                  </div>
              </section>

              <section className="scroll-section">
                  <div className="patentItem">
                      <div className="left-block">
                          <div className="content-container">
                              <h2>
                                  Protein Contact Maps AI
                              </h2>

                              <h3>
                                  2
                              </h3>
                              <p>
                                  The use of machine learning to predict the spatial arrangement of protein residues from their sequence information.
                              </p>
                              <img className="main-img" src="/images/patent.png"/>

                          </div>
                          <div className="patent-mob-image">
                              <img src="/images/patent-img.png"/>
                          </div>
                          <a href="/patent-item" className="learn-more">
                              Learn More
                          </a>
                      </div>
                      <div className="right-block">
                          <img src="/images/patent-img.png"/>
                      </div>
                  </div>
              </section>

              <section className="scroll-section">
                  <div className="patentItem">
                      <div className="left-block">
                          <div className="content-container">
                              <h2>
                                  Protein Contact Maps AI
                              </h2>

                              <h3>
                                  3
                              </h3>
                              <p>
                                  The use of machine learning to predict the spatial arrangement of protein residues from their sequence information.
                              </p>
                              <img className="main-img" src="/images/patent.png"/>

                          </div>
                          <div className="patent-mob-image">
                              <img src="/images/patent-img.png"/>
                          </div>
                          <a href="/patent-item" className="learn-more">
                              Learn More
                          </a>
                      </div>
                      <div className="right-block">
                          <img src="/images/patent-img.png"/>
                      </div>
                  </div>
              </section>



          </div>



      </main>
    </>
  )
}

export default Home;



// export async function getStaticProps() {
//     const res = await fetch('http://localhost:1337/api/patent-items');
//     const data = await res.json();
//
//
//     return {
//         props: {
//             data,
//         },
//     }
//
// }


// export async function getServerSideProps() {
//     const { data } = await axios.get('http://localhost:1337/api/patent-items');
//     return {
//         props: { data },
//     };
// }

// export async function getServerSideProps() {
//     try {
//         const { data } = await axios.get('http://localhost:1337/api/patent-items');
//         return {
//             props: {
//                 // data,
//                 pItems: data.patentItems.data,
//             },
//         }
//     } catch (err) {
//         console.log(err);
//         return {
//             props: {
//                 data: [],
//             },
//         }
//     }
// }


// export async function getServerSideProps() {
//     const { data } = await axios.get<Patent[]>('http://localhost:1337/api/patent-items');
//     return {
//         props: { data },
//     };
// }

