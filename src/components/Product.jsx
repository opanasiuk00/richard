import React from 'react'
import { motion } from "framer-motion";

const Product = ({ animation, titleTop, title, description, img, alt, reverse }) => {
    return (
        <div className={reverse ? "flex-center acetabula__inner acetabula__inner--reverce" : "flex-center acetabula__inner"}>
            <motion.div
                className="acetabula__content"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={animation}>
                <h4 className="title-top">{titleTop}</h4>
                <h2 className="title acetabula__title">{title}</h2>
                <p className="description acetabula__description">{description}</p>
            </motion.div>
            <img className="acetabula__img" src={img} alt={alt} />
        </div>
    )
}

export default Product