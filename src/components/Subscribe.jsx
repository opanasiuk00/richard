import React from "react";
import path from "../img/path.svg";

const Subscribe = () => {
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleOnChange = (e) => {
        setEmail(e.target.value);
    };

    const clearAndOpenWindowSubscribe = (message) => {
        setMessage(message);
        setOpen(true);
        setEmail("");
    }

    const subscribeEmail = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            clearAndOpenWindowSubscribe("subscribed to the newsletter");
        } else if (!regEx.test(email) && email !== "") {
            clearAndOpenWindowSubscribe("Email is not valid");
        } else {
            setMessage("")
        }
    }

    const closeSubscribeWindow = () => {
        setOpen(false);
    }

    return (
        <>
            <section className="subscribe">
                <div className="container">
                    <div className="subscribe__inner">
                        <h2 className="subscribe__title title">Get updates from Richard</h2>
                        <p className="description subscribe__description">New course alerts, discounts and free lessons</p>
                        <div className="flex-center subscribe__form">
                            <input
                                className="subscribe__form-input"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleOnChange}
                            />
                            <button
                                className="button subscribe__form-button"
                                onClick={subscribeEmail}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={open ? "subscribe-info subscribe-info--active" : "subscribe-info"}>
                <div className="subscribe-info__inner">
                    <h5 className="subscribe-info__description">{message}</h5>
                    <img className="subscribe-info__img" src={path} alt="path" onClick={closeSubscribeWindow} />
                </div>
            </section>
        </>
    )
}

export default Subscribe