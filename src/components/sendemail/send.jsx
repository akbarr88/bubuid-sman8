import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavbarAdmin from "../navbar/navbaradmin";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_lm5mjg2', 'template_2lkri7p', form.current, {
        publicKey: '2uQ4J85t_H1lQx6Z5',
      })
    .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="bg-[#54BAB9] min-h-screen">
     <NavbarAdmin />
        <div className="bg-white min-w-min mx-96 py-1 mt-8 mb-20 rounded-3xl">
        <h1 className="font-poppins text-center text-3xl py-2">Form Reply</h1>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto mt-10">
        <div className="mb-6">
            <label htmlFor="user_name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" name="user_name" id="user_name" className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
            <label htmlFor="user_email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" name="user_email" id="user_email" className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea name="message" id="message" className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
        </div>
        <div className="flex items-center justify-between">
            <button type="submit" className="my-8 ml-32 font-poppins bg-[#18978F] text-white px-20 rounded-sm">Send</button>
        </div>
        </form>
        </div>
    </div>
   
  );
};

export default ContactUs;