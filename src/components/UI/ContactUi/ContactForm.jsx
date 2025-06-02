import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiQuillPenAiLine } from "react-icons/ri";
import { TbMessage2Heart } from "react-icons/tb";

const ContactForm = () => {
  return (
    <div >
      <p className="text-[12px] hidden md:block text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        quam non ipsam! Illo corrupti soluta perferendis officia eligendi
        nostrum maxime?
      </p>

      <form action="" className="py-5 flex flex-col gap-3">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-500 flex-1/2">
            <FaUserCircle />
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="outline-none border-none w-full text-sm"
            />
          </div>
          <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-500 flex-1/2">
            <MdMarkEmailUnread />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="outline-none border-none w-full text-sm"
            />
          </div>
        </div>

        <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-center gap-4 text-gray-500">
          <RiQuillPenAiLine />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="outline-none border-none w-full text-sm"
          />
        </div>

        <div className="px-4 py-2 border border-gray-400 rounded-2xl flex items-start gap-4 text-gray-600">
          <TbMessage2Heart className="mt-1" />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="outline-none border-none w-full resize-none text-sm"
          />
        </div>

        <button type="submit" className="custom-button w-full">
                Send Message
              </button>
      </form>
    </div>
  );
};

export default ContactForm;
