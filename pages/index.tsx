import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import {NextPage} from "next";
import axios from "axios";
import Header from "./../components/header";

import React, { useEffect, useRef, useState } from 'react';


type PatentItem = {
    id: number;
    attributes: {
        Title: string;
        ShortDescription: string;
    };
};

type ApiResponse = {
    data: PatentItem[];
};


const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:1337/api/patent-items?populate=*');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};



const Home: React.FC = () => {

    // const router = useRouter();
    // const scrollContainerRef = useRef<HTMLDivElement>(null);
    //
    // useEffect(() => {
    //     const scrollContainer = scrollContainerRef.current;
    //
    //     if (!scrollContainer) {
    //         return; // Exit early if scrollContainer is null
    //     }
    //
    //     const scrollSections = Array.from(document.querySelectorAll('.scroll-section'));
    //
    //     let currentIndex = 0;
    //     let scrollInterval: NodeJS.Timeout;
    //
    //     const scrollToNextSection = () => {
    //         currentIndex = (currentIndex + 1) % scrollSections.length;
    //         scrollContainer.scrollTo({
    //             top: scrollSections[currentIndex]?.getBoundingClientRect().top + scrollContainer.scrollTop,
    //             behavior: 'smooth',
    //         });
    //     };
    //
    //     scrollInterval = setInterval(scrollToNextSection, 3000);
    //
    //     const handleScroll = () => {
    //         const sectionTops = scrollSections.map(section => section.getBoundingClientRect().top);
    //         const currentSectionIndex = sectionTops.findIndex(top => top >= 0);
    //
    //         if (currentSectionIndex !== -1) {
    //             currentIndex = currentSectionIndex;
    //             clearInterval(scrollInterval);
    //             scrollInterval = setInterval(scrollToNextSection, 3000);
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


    // API CALLBACK



    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetchData();
            if (data && data.data) {
                setItems(data.data);
            }
        };

        fetchItems();
    }, []);

    const getFullImageUrl = (url: string) => {
        return `http://localhost:1337${url}`;
    };

    const slugify = (text: string) => {
        return text.toString().toLowerCase().trim()
            .replace(/&/g, '-and-')
            .replace(/[\s\W-]+/g, '-');
    };



    // SCROLL LOGIC

    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) {
            return; // Exit early if scrollContainer is null
        }

        let scrollSections: HTMLDivElement[] = [];

        const initializeScrolling = () => {
            // scrollSections = Array.from(scrollContainer.getElementsByClassName('scroll-section'));
            scrollSections = Array.from(scrollContainer.getElementsByClassName('scroll-section')) as HTMLDivElement[];


            let currentIndex = 0;
            let scrollInterval: NodeJS.Timeout;

            const scrollToNextSection = () => {
                currentIndex = (currentIndex + 1) % scrollSections.length;
                scrollSections[currentIndex].scrollIntoView({ behavior: 'smooth' });
            };

            scrollInterval = setInterval(scrollToNextSection, 3000);

            const handleScroll = () => {
                const sectionTops = scrollSections.map(section => section.getBoundingClientRect().top);
                const scrollContainerTop = scrollContainer.getBoundingClientRect().top;
                const currentSectionIndex = sectionTops.findIndex(top => top - scrollContainerTop >= 0);

                if (currentSectionIndex !== -1) {
                    currentIndex = currentSectionIndex;
                    clearInterval(scrollInterval);
                    scrollInterval = setInterval(scrollToNextSection, 3000);
                }
            };

            scrollContainer.addEventListener('scroll', handleScroll);
        };

        // Introduce a delay before initializing scrolling
        const delay = setTimeout(initializeScrolling, 500);

        return () => {
            clearTimeout(delay);
        };
    }, []);



  return (
    <>
      <Head>
        <title>Flaship Patents</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>



          {/*{data.map(( item ) => (*/}
          {/*    <div className="patentSection" key={item.id}>*/}
          {/*        {item.Title}*/}
          {/*    </div>*/}
          {/*))}*/}


          {/*// <div key={item.id}>*/}
          {/*//     <h2>{item.attributes.Title}</h2>*/}
          {/*//     <p>{item.attributes.ShortDescription}</p>*/}
          {/*//     <p>{item.attributes.MainDescription}</p>*/}
          {/*//     {item.attributes.MainImage?.data && (*/}
          {/*//         <img*/}
          {/*//             src={getFullImageUrl(item.attributes.MainImage.data.attributes.url)}*/}
          {/*//             alt="Main Image"*/}
          {/*//         />*/}
          {/*//     )}*/}
          {/*//     {item.attributes.PatentImages?.data && (*/}
          {/*//         <div>*/}
          {/*//             {item.attributes.PatentImages.data.map((image) => (*/}
          {/*//                 <img*/}
          {/*//                     key={image.id}*/}
          {/*//                     src={getFullImageUrl(image.attributes.url)}*/}
          {/*//                     alt={`Patent Image ${image.id}`}*/}
          {/*//                 />*/}
          {/*//             ))}*/}
          {/*//         </div>*/}
          {/*//     )}*/}
          {/*// </div>*/}








          {/*    className="scroll-container patent-items container-sp"*/}

          <div className="scroll-container" ref={scrollContainerRef}>

              <section className="mainSection scroll-section">
                  <div className="border-cont">

                      <div className="head-container">
                          <Header/>

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

              {(items as any[] || []).map((item, index) => (
                  <section key={item?.id ?? index} id="first-section" className="scroll-section">
                      <div className="patentItem">
                          <div className="left-block">
                              <div className="content-container">
                                  <h2>
                                      {item.attributes.Title}
                                  </h2>

                                  <h3>
                                      {index + 1} {/* Counter for each post */}
                                  </h3>
                                  <p>
                                      {item.attributes.ShortDescription}
                                  </p>
                                  <img className="main-img" src="/images/patent.png"/>

                              </div>
                              <div className="patent-mob-image">
                                  <img src="/images/patent-img.png"/>
                              </div>
                              {/*<Link href={`/patents/${slugify(item.attributes.Title)}-${item.id}`}>*/}
                              {/*    Learn More*/}
                              {/*</Link>*/}
                              {/*<Link href={`/patents/${slugify(item.attributes.Title)}-${item.attributes.urlSlug}`}>*/}
                              {/*    Learn More*/}
                              {/*</Link>*/}
                              {/*<Link href="/patents/[slug]" as="/patent/test-title">*/}
                              {/*    learn more*/}
                              {/*</Link>*/}
                              {/*<Link href="/patents/slug" as={`/patents/${encodeURIComponent(item.attributes.Title)}`} className="learn-more">*/}
                              {/*    Learn More*/}
                              {/*</Link>*/}


                              <Link className="learn-more" href={`/patents/${item.attributes.urlSlug}`}>
                                  LEARN MORE
                              </Link>

                          </div>
                          <div className="right-block">
                              {/*{item.attributes.MainImage?.data && (*/}
                              {/*    <img*/}
                              {/*        src={getFullImageUrl(item.attributes.MainImage.data.attributes.url)}*/}
                              {/*        alt="Main Image"*/}
                              {/*    />*/}
                              {/*)}*/}
                              <img src="/images/patent-img.png"/>
                          </div>
                      </div>
                  </section>
              ))}



              {/*<section id="first-section" className="scroll-section">*/}
              {/*    <div className="patentItem">*/}
              {/*        <div className="left-block">*/}
              {/*            <div className="content-container">*/}
              {/*                <h2>*/}
              {/*                    Protein Contact Maps AI*/}
              {/*                </h2>*/}

              {/*                <h3>*/}
              {/*                    1*/}
              {/*                </h3>*/}
              {/*                <p>*/}
              {/*                    The use of machine learning to predict the spatial arrangement of protein residues from their sequence information.*/}
              {/*                </p>*/}
              {/*                <img className="main-img" src="/images/patent.png"/>*/}

              {/*            </div>*/}
              {/*            <div className="patent-mob-image">*/}
              {/*                <img src="/images/patent-img.png"/>*/}
              {/*            </div>*/}
              {/*            <a href="/patent-item" className="learn-more">*/}
              {/*                Learn More*/}
              {/*            </a>*/}
              {/*        </div>*/}
              {/*        <div className="right-block">*/}
              {/*            <img src="/images/patent-img.png"/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</section>*/}

              {/*<section className="scroll-section">*/}
              {/*    <div className="patentItem">*/}
              {/*        <div className="left-block">*/}
              {/*            <div className="content-container">*/}
              {/*                <h2>*/}
              {/*                    Protein Contact Maps AI*/}
              {/*                </h2>*/}

              {/*                <h3>*/}
              {/*                    2*/}
              {/*                </h3>*/}
              {/*                <p>*/}
              {/*                    The use of machine learning to predict the spatial arrangement of protein residues from their sequence information.*/}
              {/*                </p>*/}
              {/*                <img className="main-img" src="/images/patent.png"/>*/}

              {/*            </div>*/}
              {/*            <div className="patent-mob-image">*/}
              {/*                <img src="/images/patent-img.png"/>*/}
              {/*            </div>*/}
              {/*            <a href="/patent-item" className="learn-more">*/}
              {/*                Learn More*/}
              {/*            </a>*/}
              {/*        </div>*/}
              {/*        <div className="right-block">*/}
              {/*            <img src="/images/patent-img.png"/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</section>*/}

              {/*<section className="scroll-section">*/}
              {/*    <div className="patentItem">*/}
              {/*        <div className="left-block">*/}
              {/*            <div className="content-container">*/}
              {/*                <h2>*/}
              {/*                    Protein Contact Maps AI*/}
              {/*                </h2>*/}

              {/*                <h3>*/}
              {/*                    3*/}
              {/*                </h3>*/}
              {/*                <p>*/}
              {/*                    The use of machine learning to predict the spatial arrangement of protein residues from their sequence information.*/}
              {/*                </p>*/}
              {/*                <img className="main-img" src="/images/patent.png"/>*/}

              {/*            </div>*/}
              {/*            <div className="patent-mob-image">*/}
              {/*                <img src="/images/patent-img.png"/>*/}
              {/*            </div>*/}
              {/*            <a href="/patent-item" className="learn-more">*/}
              {/*                Learn More*/}
              {/*            </a>*/}
              {/*        </div>*/}
              {/*        <div className="right-block">*/}
              {/*            <img src="/images/patent-img.png"/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</section>*/}



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

