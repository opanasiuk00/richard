import React from "react";
import header_logo from "../img/header-logo.svg";
import header_phone from "../img/header-phone.png";
import { motion } from "framer-motion";

const headerMenu = [
    { id: 0, href: "#about", content: "About" },
    { id: 1, href: "#features", content: "Features" },
    { id: 2, href: "#how_to_use", content: "How to Use" },
    { id: 3, href: "#download", content: "Download" }
];

const Header = ({ leftAnimation }) => {
    return (
        <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="header"
        >
            <div className="container">
                <div className="header__top flex-between">
                    <div className="header__logo">
                        <a className="header__logo-link" href="/">
                            <img className="header__logo-img" src={header_logo} alt="richard" />
                        </a>
                    </div>
                    <nav className="menu">
                        <ul className="menu__list">
                            {
                                headerMenu.map(item => <li className="menu__list-item" key={item.id}>
                                    <a className="menu__link" href={item.href}>{item.content}</a>
                                </li>)
                            }
                        </ul>
                    </nav>
                </div>
                <div className="header__content flex-between">
                    <div className="header__content-inner">
                        <motion.h1
                            className="header__content-title"
                            variants={leftAnimation}
                            custom={1}
                        >
                            Momentum
                        </motion.h1>
                        <motion.p
                            className="header__content-description"
                            variants={leftAnimation}
                            custom={2}
                        >
                            Launch your product — and savor the momentum.
                        </motion.p>
                        <a className="header__button-link" href="https://www.google.com">
                            <motion.button
                                className="button"
                                variants={leftAnimation}
                                custom={3}
                            >
                                Get the App
                            </motion.button>
                        </a>
                    </div>
                    <img className="header__content-img" src={header_phone} alt="phone" />
                </div>
            </div>
        </motion.header>
    )
}

export default Header