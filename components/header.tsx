import Link from "next/link";
import React from "react";
import Head from "next/head";
import {useRouter} from 'next/router'


const Header: React.FC = () => {

    const router = useRouter();

    return (
        <header className="header">
            <button className="mobile-menu-button" tabIndex={0}>
                <img src="/images/menu-but.png"/>
                <span className="mobile-menu-block">
                              <a href="/" className="menu-item">Our Patents</a>
                              <a href="/crafts" className="menu-item">Crafts</a>
                              <a href="/stories" className="menu-item">Stories</a>
                              <a href="/crafters" className="menu-item">Crafters</a>
                              <a href="/contact" className="menu-item">Contact Us</a>
                              <a href="/" className="book-link">Book Your FREE Call</a>
                          </span>
            </button>
            <Link className="logo" href="/">
                <img src="/images/logo.png"/>
            </Link>
            <div className="menu-block">
                <Link href="/" className={router.pathname == "/" ? "menu-item active" : "menu-item"}>Our Patents</Link>
                <Link href="/crafts" className={router.pathname == "/crafts" ? "menu-item active" : "menu-item"}>Crafts</Link>
                <Link href="/stories" className={router.pathname == "/stories" ? "menu-item active" : "menu-item"}>Stories</Link>
                <Link href="/crafters" className={router.pathname == "/crafters" ? "menu-item active" : "menu-item"}>Crafters</Link>
                <Link href="/contact" className={router.pathname == "/contact" ? "menu-item active" : "menu-item"}>Contact Us</Link>
                <Link href="/" className="book-link">Book Your FREE Call</Link>
            </div>
        </header>
    )
}

export default Header;


