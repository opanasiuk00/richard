import React from "react";
import "./scss/style.scss"
import nullam_tablet from "./img/nullam-tablet.png";
import acetabula_pasta from "./img/acetabula-pasta.png";
import acetabula_orders from "./img/acetabula-orders.png";
import acetabula_pasta2 from "./img/acetabula-pasta2.png";
import benefits_humburger from "./img/benefits-humburger.svg";
import benefits_spoon from "./img/benefits-spoon.svg";
import benefits_optimized from "./img/benefits-optimized.svg";
import bacetabula_humburger from "./img/acetabula-humburger.png";
import bacetabula_salad from "./img/acetabula-salad.png";
import quotes from "./img/quotes.svg";
import partners_uber from "./img/partners-uber.svg";
import partners_product from "./img/partners-product.svg";
import partners_microsoft from "./img/partners-microsoft.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Subscribe from "./components/Subscribe";

const leftAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.3 }
  }),
}
const rightAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 }
  },
}

const firstProducts = [
  { id: 0, topTitle: "Aenean Consectetur", title: "Cay sociis nato que penatibus et", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", img: acetabula_pasta, alt: "pasta", animation: leftAnimation, reverse: false },
  { id: 1, topTitle: "ConsectUltricies", title: "Amet Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", img: acetabula_orders, alt: "pasta", animation: rightAnimation, reverse: true },
  { id: 2, topTitle: "Aenean Consectetur Porta", title: "Magna Porta Sit Bibendum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", img: acetabula_pasta2, alt: "pasta", animation: leftAnimation, reverse: false }
]

const twoProducts = [
  { id: 0, topTitle: "Aenean Consectetur Porta", title: "Sem Risus Elit Vestibulum", description: "Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.", img: bacetabula_humburger, alt: "humbruger", animation: leftAnimation, reverse: false },
  { id: 1, topTitle: "Aenean Consectetur Porta", title: "Parturient Tortor", description: "Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.", img: bacetabula_salad, alt: "salad", animation: rightAnimation, reverse: true }
]

const App = () => {

  return (
    <>
      <Header leftAnimation={leftAnimation} />
      <section className="nullam" id="about">
        <div className="container">
          <div className="nullam__inner">
            <h4 className="title-top">Aenean Consectetur Porta</h4>
            <h2 className="nullam__title title">Nullam quis risus eget urna mollis ornare vel eu leo.</h2>
            <img className="nullam__img" src={nullam_tablet} alt="tablet" />
          </div>
        </div>
      </section>
      <section className="acetabula" id="how_to_use">
        <div className="container">
          {firstProducts.map(item => <Product
            key={item.id}
            titleTop={item.titleTop}
            title={item.title}
            description={item.description}
            img={item.img}
            alt={item.alt}
            reverse={item.reverse}
            animation={item.animation} />)}
        </div>
      </section>
      <section className="benefits">
        <div className="container">
          <div className="benefits__inner flex-between">
            <div className="benefits__item">
              <img className="benefits__item-img" src={benefits_humburger} alt="humburger" />
              <h3 className="benefits__item-title">Activity Notifications</h3>
              <p className="description benefits__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className="benefits__item">
              <img className="benefits__item-img" src={benefits_spoon} alt="spoon" />
              <h3 className="benefits__item-title">Custom Timing</h3>
              <p className="description benefits__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className="benefits__item">
              <img className="benefits__item-img" src={benefits_optimized} alt="optimized" />
              <h3 className="benefits__item-title">Mobile Optimized</h3>
              <p className="description benefits__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="acetabula" id="features">
        <div className="container">
          {twoProducts.map(item => <Product
            key={item.id}
            titleTop={item.titleTop}
            title={item.title}
            description={item.description}
            img={item.img}
            alt={item.alt}
            reverse={item.reverse}
            animation={item.animation} />)}
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="reviews__inner">
            <img className="reviews__img" src={quotes} alt="quotes" />
            <div className="reviews__slides">
              <div className="reviews__slides-item">
                <p className="reviews__slides-description">HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <div className="flex-center partners__inner">
            <img className="partners__img" src={partners_uber} alt="uber eats" />
            <img className="partners__img" src={partners_product} alt="product hunt" />
            <img className="partners__img" src={partners_microsoft} alt="microsoft" />
          </div>
        </div>
      </section>
      <section className="phones"></section>
      <section className="ready" id="download">
        <div className="container">
          <h2 className="title ready__title">Ready to get started?</h2>
          <div className="flex-center ready__buttons">
            <a className="ready__button-link" href="https://www.google.com">
              <button className="button ready__button">Download Now</button>
            </a>
            <a className="ready__button-link" href="mailto:gmail@gmail.com">
              <button className="button ready__button-touch">Get in Touch</button>
            </a>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
