import React from "react";
import footer_logo from "../img/footer-logo.svg";

const footerMenu = [
    { id: 0, href: "mailto:gmail@gmail.com", content: "Email" },
    { id: 1, href: "https://www.instagram.com/", content: "Instagram" },
    { id: 2, href: "https://www.facebook.com/", content: "Facebook" },
    { id: 3, href: "https://twitter.com/", content: "Twitter" },
    { id: 4, href: "https://blog.google/products/search/learn-how-find-image-licensing-information-google-images/", content: "Image License Info" },
    { id: 5, href: "https://webflow.com/", content: "Powered by Webflow" }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <a className="footer__logo-link" href="/">
                            <img className="footer__logo-img" src={footer_logo} alt="richard" />
                        </a>
                    </div>
                    <nav className="menu">
                        <ul className="menu__list">
                            {
                                footerMenu.map(item => <li className="menu__list-item" key={item.id}>
                                    <a className="menu__link footer__link" href={item.href}>{item.content}</a>
                                </li>)
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer