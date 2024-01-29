import React, { useState } from 'react';
import './styles.css';
import logo from './images/logo.svg';
import errorIcon from './images/icon-error.svg';
import arrow from './images/icon-arrow.svg';


const BaseApparelComingSoon: React.FC = () => {
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const [labelVisible, setLabelVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue: string = email.trim();

    if (!isEmail(inputValue)) {
      setErrorVisible(true);
      setLabelVisible(true);
    } else {
      setErrorVisible(false);
      setLabelVisible(false);
    }
  };

  const isEmail = (input: string): boolean => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  };

  return (
    <>
      <header><img src={logo} alt="logo" /></header>
      <section className="container">
        <div className="left">
          <h1>We're <br /><span>coming<br /> soon</span></h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <form onSubmit={validate}>
            
            <input
              name="Email"
              id="Email"
              value={email}
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorVisible && <img src={errorIcon} className="error-icon" alt="error" />}
            <button type="submit"><img src={arrow} alt="arrow" /></button>
            {labelVisible && <p className="error-msg">Please provide a valid Email</p>}
          </form>
        </div>
        <div className="right"></div>
      </section>
      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://kevorklepedjian.vercel.app/" target="_blank" rel="noopener noreferrer">Kevork Lepedjian</a>.
        </p>
      </footer>
    </>
  );
};

export default BaseApparelComingSoon;
