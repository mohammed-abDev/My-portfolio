import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Validation
    if (!name || !email || !message) {
      setStatus({ loading: false, success: false, error: true, message: 'All fields are required' });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ loading: false, success: false, error: true, message: 'Please enter a valid email address' });
      return;
    }

    if (message.length < 10) {
      setStatus({ loading: false, success: false, error: true, message: 'Message must be at least 10 characters' });
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    // Send message to me
    emailjs.sendForm(
      'service_xmqtkju',    
      'template_odhmyxy',   
      form.current,
      'SFrjvCdgJMBQMyxJX' 
    ).then(() => {

      // Send AUTO-REPLY to visitor
      emailjs.send(
        'service_xmqtkju',
        'template_kppkuea', 
        {
          user_name: name,
          user_email: email
        },
        'SFrjvCdgJMBQMyxJX'
      );

      // Success popup
      setStatus({
        loading: false,
        success: true,
        error: false,
        message: "Message sent successfully! A confirmation email has been sent to you."
      });

      form.current.reset();

      // Remove popup after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);

    }, (error) => {
      console.error(error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or email me directly.'
      });
    });
  };

  return (
    <section id="contact" className="fade-in">
      <h2 className="section-title">CONTACT</h2>

      <form ref={form} className="contact-form glass-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="user_name" placeholder="Your Name" disabled={status.loading} />
        </div>

        <div className="form-group">
          <input type="email" name="user_email" placeholder="Your Email" disabled={status.loading} />
        </div>

        <div className="form-group">
          <textarea name="message" rows="5" placeholder="Your Message" disabled={status.loading} />
        </div>

        <button type="submit" className="neural-btn" disabled={status.loading}>
          {status.loading ? (
            <>
              <FaSpinner className="spinner" /> SENDING...
            </>
          ) : (
            'SEND MESSAGE'
          )}
        </button>
      </form>

      {/* Popup Message */}
      {status.message && (
        <div className="popup-overlay">
          <div className={`popup ${status.success ? 'success' : 'error'}`}>
            <div className="popup-icon">
              {status.success ? <FaCheck /> : <FaExclamationTriangle />}
            </div>
            <p>{status.message}</p>
            <button
              className="popup-btn"
              onClick={() => setStatus({ loading: false, success: false, error: false, message: '' })}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
