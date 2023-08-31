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
    <section id="contact" className={`relative py-20 bg-[#002244] ${isContactVisible ? '' : 'hidden'}`}>
      <div className="flex justify-center items-center">
        <div className="lg:w-[65%] bg-white p-6 rounded-lg shadow-shadowOne">
          <h2 className="text-center text-lg mb-4 font-semibold">
            What’s on your mind?
          </h2>
          <p className="text-center text-base mb-4">
            We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.
          </p>
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
              className={`contactInput`}
              type="text"
              placeholder="Your name"
              style={{ border: '1px solid #ccc' }}
            />
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className={`contactInput`}
              type="text"
              placeholder="Phone Number"
              style={{ border: '1px solid #ccc' }}
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={`contactInput`}
              type="email"
              placeholder="Email"
              style={{ border: '1px solid #ccc' }}
            />
            <input
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              className={`contactInput`}
              type="text"
              placeholder="Subject"
              style={{ border: '1px solid #ccc' }}
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className={`contactTextArea`}
              cols="30"
              rows="8"
              placeholder="Message"
              style={{ border: '1px solid #ccc' }}
            />
            <button
              onClick={handleSend}
              className="w-full h-8 bg-[#00df9a] rounded-lg text-sm text-white tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-white mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
