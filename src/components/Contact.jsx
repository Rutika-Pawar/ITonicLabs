import React, { useState } from 'react';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isContactVisible, setContactVisible] = useState(true);

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
    <section id="contact" className={`relative py-20`} style={{ background: '#fff' }}>
      <div className="text-center text-lg mb-8 font-semibold text-[#002244]">
        <h1 className="text-3xl font-bold text-[#00df9a] mb-4">Contact Us</h1>
        What’s on your mind? We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-[50%] bg-white p-4 rounded-md border border-gray-300 shadow-lg mt-4">
          <form className="w-full flex flex-col gap-4">
            {errMsg && (
              <p className="py-2 bg-red-200 text-red-800 text-center text-base rounded-md">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-2 bg-green-200 text-green-800 text-center text-base rounded-md">
                {successMsg}
              </p>
            )}
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="contactInput p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Your name"
            />
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="contactInput p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Phone Number"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="contactInput p-2 border border-gray-300 rounded-md"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              className="contactInput p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Subject"
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="contactTextArea p-2 border border-gray-300 rounded-md"
              cols="30"
              rows="6"
              placeholder="Message"
            />
            <button
              onClick={handleSend}
              className="w-full h-10 bg-[#00df9a] rounded-md text-lg text-white uppercase hover:bg-[#00bf8d] duration-300 mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="lg:w-[35%] lg:ml-10 mt-6 lg:mt-0">
          <img
            src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-conference-video-call-by-remote-communication-with-online-friends-using-a-png-image_4685097.png"
            alt="Contact Form"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
