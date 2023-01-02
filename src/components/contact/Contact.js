import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

import emailjs from 'emailjs-com';
import { useRef } from "react";
import { toast } from "react-toastify";



const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_quoclke', 'template_7rxo30q', form.current, 'ZvEiFnvknD90YqN-o')
      .then((result) => {
        toast.success("Successfully sent!")
          console.log(result.text);
          
      }, (error) => {
        toast.error(error.text)
          console.log(error.text);
      });
      e.target.reset()
  };
  const contactOptions = [
    {
      icon: <MdOutlineEmail className="contact__option-icon"/>,
      option: "Email",
      value: "bishalmoktan270@gmail.com",
      url: "mailto:bishalmoktan270@gmail.com"
    },
    {
      icon: <RiMessengerLine className="contact__option-icon"/>,
      option: "Messenger",
      value: "Bishal Moktan",
      url: "https://m.me/Nplubo.Cjtibm.75436"
    },
    {
      icon: <BsWhatsapp className="contact__option-icon"/>,
      option: "WhatsApp",
      value: "+9779818370448",
      url: "https://api.whatsapp.com/send?phone=+9779818370448"
    },
  ]
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        {contactOptions.map((item, index) => {
          const {option, icon, value, url} = item
         return <article className="contact__option" key={index}>
          {icon}
            <h4>{option}</h4>
            <h5>{value}</h5>
            <a href={url} target="_blank">Send a Message</a>
          </article>
        })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message"rows="7" placeholder="Your MEssage" required></textarea>
          <button className="btn btn-primary">Send Message</button>

        </form>
      </div>
    </section>
  )
}
export default Contact