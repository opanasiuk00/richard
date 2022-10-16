import React from "react";
import header_logo from "./img/header-logo.svg";
import header_phone from "./img/header-phone.png";
import nullam_tablet from "./img/nullam-tablet.png";
import acetabula_pasta from "./img/acetabula-pasta.png";
import acetabula_orders from "./img/acetabula-orders.png";
import acetabula_pasta2 from "./img/acetabula-pasta2.png";
import benefits_humburger from "./img/benefits-humburger.svg";
import benefits_spoon from "./img/benefits-spoon.svg";
import benefits_optimized from "./img/benefits-optimized.svg";
import bacetabula_humburger from "./img/acetabula-humburger.png";
import bacetabula_salad from "./img/acetabula-salad.png";
import partners_uber from "./img/partners-uber.svg";
import partners_product from "./img/partners-product.svg";
import partners_microsoft from "./img/partners-microsoft.svg";
import footer_logo from "./img/footer-logo.svg";

const headerMenu = [
  { id: 0, href: "#", content: "About" },
  { id: 1, href: "#", content: "Features" },
  { id: 2, href: "#", content: "How to Use" },
  { id: 3, href: "#", content: "Download" }
];
const footerMenu = [
  { id: 0, href: "#", content: "Email" },
  { id: 1, href: "#", content: "Instagram" },
  { id: 2, href: "#", content: "Facebook" },
  { id: 3, href: "#", content: "Twitter" },
  { id: 4, href: "#", content: "Image License Info" },
  { id: 5, href: "#", content: "Powered by Webflow" }
];

const App = () => {

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__top">
            <div className="logo">
              <img className="logo__img" src={header_logo} alt="richard" />
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
          <div className="header__content">
            <div className="header__content-inner">
              <h1 className="header__content-title">Momentum</h1>
              <p className="header__content-description">Launch your product — and savor the momentum.</p>
              <button className="button">Get the App</button>
            </div>
            <img className="header__content-img" src={header_phone} alt="phone" />
          </div>
        </div>
      </header>
      <section className="nullam">
        <div className="container">
          <h4 className="title__top">Aenean Consectetur Porta</h4>
          <h2 className="title">Nullam quis risus eget urna mollis ornare vel eu leo.</h2>
          <img className="nullam__img" src={nullam_tablet} alt="tablet" />
        </div>
      </section>
      <section className="acetabula">
        <div className="container">
          <div className="acetabula__inner">
            <div className="acetabula__content">
              <h4 className="title__top">Aenean Consectetur</h4>
              <h2 className="title">Cay sociis nato que penatibus et</h2>
              <p className="description acetabula__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <img className="acetabula__img" src={acetabula_pasta} alt="pasta" />
          </div>
          <div className="acetabula__inner acetabula__inner--reverce">
            <div className="acetabula__content">
              <h4 className="title__top">ConsectUltricies</h4>
              <h2 className="title">Amet Ipsum</h2>
              <p className="description acetabula__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <img className="acetabula__img" src={acetabula_orders} alt="orders" />
          </div>
          <div className="acetabula__inner">
            <div className="acetabula__content">
              <h4 className="title__top">Aenean Consectetur Porta</h4>
              <h2 className="title">Magna Porta Sit Bibendum</h2>
              <p className="description acetabula__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <img className="acetabula__img" src={acetabula_pasta2} alt="pasta" />
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="container">
          <div className="benefits__inner flex__between">
            <div className="benefits__item">
              <img className="benefits__item-img" src={benefits_humburger} alt="humburger" />
              <h3 className="benefits__item-title">Activity Notifications</h3>
              <p className="benefits__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className="benefits__item">
              <img className="benefits__item-img" src={benefits_spoon} alt="spoon" />
              <h3 className="benefits__item-title">Custom Timing</h3>
              <p className="benefits__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className="benefits__item">
              <img className="benefits__item-img" src={benefits_optimized} alt="optimized" />
              <h3 className="benefits__item-title">Mobile Optimized</h3>
              <p className="benefits__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="acetabula">
        <div className="container">
          <div className="acetabula__inner">
            <div className="acetabula__content">
              <h4 className="title__top">Aenean Consectetur Porta</h4>
              <h2 className="title">Sem Risus Elit Vestibulum</h2>
              <p className="description acetabula__description">Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
            </div>
            <img className="acetabula__img" src={bacetabula_humburger} alt="humburger" />
          </div>
          <div className="acetabula__inner acetabula__inner--reverce">
            <div className="acetabula__content">
              <h4 className="title__top">Aenean Consectetur Porta</h4>
              <h2 className="title">Parturient Tortor</h2>
              <p className="description acetabula__description">Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
            </div>
            <img className="acetabula__img" src={bacetabula_salad} alt="salad" />
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="reviews__inner">
            <img className="reviews__img" src="" alt="" />
            <div className="reviews__slides">
              <div className="reviews__slides-item">
                <p className="reviews__slides-description">HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing</p>
                <h5 className="reviews__slides-name">Joshua Home</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <div className="partners__inner">
            <img className="partners__img" src={partners_uber} alt="uber eats" />
            <img className="partners__img" src={partners_product} alt="product hunt" />
            <img className="partners__img" src={partners_microsoft} alt="microsoft" />
          </div>
        </div>
      </section>
      <section className="phones"></section>
      <section className="ready">
        <div className="container">
          <h2 className="title">Ready to get started?</h2>
          <div className="ready__buttons">
            <button className="button button--download">Download Now</button>
            <button className="button button--touch">Get in Touch</button>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="container">
          <div className="subscribe__inner">
            <h2 className="subscribe__title title">Get updates from Richard</h2>
            <p className="subscribe__discription">New course alerts, discounts and free lessons</p>
            <div className="subscribe__form">
              <input className="subscribe__form-input" type="text" placeholder="Enter your email" />
              <button className="button button--subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__logo">
            <img className="footer__logo-img" src={footer_logo} alt="richard" />
          </div>
          <nav className="menu">
            <ul className="menu__list">
              {
                footerMenu.map(item => <li className="menu__list-item" key={item.id}>
                  <a className="menu__link" href={item.href}>{item.content}</a>
                </li>)
              }
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
