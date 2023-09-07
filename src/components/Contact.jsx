import React, { useState } from 'react';
import Contact from '../styles/Contact.css';
import contactform from '../assets/contactform.png';
const Contactcomponent = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = (email) => {
    return /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === '') {
      setErrMsg('Username is required!');
    } else if (phoneNumber === '') {
      setErrMsg('Phone number is required!');
    } else if (email === '') {
      setErrMsg('Please give your Email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Give a valid Email!');
    } else if (subject === '') {
      setErrMsg('Please give your Subject!');
    } else if (message === '') {
      setErrMsg('Message is required!');
    } else {
      setSuccessMsg(`Thank you dear ${username}, Your message has been sent successfully!`);
      setErrMsg('');
      setUsername('');
      setPhoneNumber('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>What’s on your mind? We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.</p>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          {errMsg && (
            <p className="contact-error">{errMsg}</p>
          )}
          {successMsg && (
            <p className="contact-success">{successMsg}</p>
          )}
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="contact-input"
            type="text"
            placeholder="Your name"
          />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            className="contact-input"
            type="text"
            placeholder="Phone Number"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="contact-input"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="contact-input"
            type="text"
            placeholder="Subject"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="contact-textarea"
            cols="30"
            rows="6"
            placeholder="Message"
          />
          <button
            onClick={handleSend}
            className="contact-button"
          >
            Send Message
          </button>
        </div>
        <div className="contact-image">
          <img
            src="contactform"
            alt="Contact Form"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
