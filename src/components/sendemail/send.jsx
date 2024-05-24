import emailjs from "@emailjs/browser";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavbarAdmin from "../navbar/navbaradmin";

export const ContactUs = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getDatafromLapor() {
      const res = await axios.get(`http://localhost:3000/lapor/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.data.User);
    }
    getDatafromLapor();
  }, [id]);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:3000/lapor/${id}/true`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res) {
        alert("error something wrong");
        return;
      }
      navigate("/datalaporan");
    } catch (error) {
      alert("error something");
    }

    emailjs
      .sendForm("service_lm5mjg2", "template_2lkri7p", form.current, {
        publicKey: "2uQ4J85t_H1lQx6Z5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    alert("Email terkirim");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarAdmin />
      <div className="flex-grow flex flex-col items-center justify-center overflow-x-auto mt-16">
        <h1 className="text-3xl text-gray-700 mb-4">Form Reply</h1>
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="user_name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="input input-bordered input-primary w-full h-8"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="to_name"
                value={user.nama}
                id="to_name"
                className="input hidden input-bordered input-primary w-full h-8"
                required
              />
              <input
                type="email"
                name="to_email"
                value={user.email}
                id="to_email"
                className="input hidden input-bordered input-primary w-full h-8"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="textarea textarea-primary w-full h-64"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn mt-4 btn-primary w-full py-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
