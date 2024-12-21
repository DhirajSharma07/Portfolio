


import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="pt-20 pb-5">
      <div className="max-w-full  px-6">
        <h2 className="text-4xl font-bold text-center uppercase mb-8">
          Contact Me
        </h2>
       

        {isSubmitted && (
          <div className="mb-6 p-4  rounded-md text-center">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className=" lg:px-40 rounded-lg  space-y-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg uppercase mb-2">
               Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg uppercase mb-2">
               Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>


          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg  uppercase mb-2">
             Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="message..."
              
              className="p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-32 lg:w-52 py-3 text-white bg-orange-600 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

