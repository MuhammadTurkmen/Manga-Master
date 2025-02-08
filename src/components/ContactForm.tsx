import { Form } from "react-router-dom";
import image from "../../public/number-1.png";
import { Input } from "./ui/input";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // your email service template, and public key
    const serviceId = "service_2kfrrvq";
    const templateId = "template_1oaba55";
    const publicKey = "FWScxC107PNPpO90N";

    // create a new object that contains dynamic template  params
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      form_email: email,
      phone: phone,
      subject: subject,
      to_name: "Manga master",
      message: message,
    };

    // send the email using emailjs
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setsubject("");
        setMessage("");
        alert(
          "message send, thank you for your time. we will reach out to you soon"
        );
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-between px-8 gap-10 lg:gap-10 items-center">
      <img src={image} alt="img" className="lg:w-96 h-[628px] object-cover" />
      <div className="w-full text-white">
        <h1 className="mb-5">We Will Be Happy To Help You?</h1>
        <Form
          className="w-full flex flex-col gap-3 lg:gap-4"
          onSubmit={handleSubmit}
        >
          <div className="md:flex-row flex flex-col gap-3 md:gap-4">
            <Input
              type="text"
              placeholder="First Name"
              className="placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl "
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <Input
            type="email"
            className="w-full placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="number"
            required
            className="w-full placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="text"
            required
            className="w-full placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
          />
          <textarea
            name=""
            required
            placeholder="Message"
            id=""
            rows={3}
            className="w-full placeholder:text-white bg-black py-2 px-3 border-1 border-white rounded-lg lg:placeholder:text-xl lg:text-xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full mb-10 font-bold bg-blue-500 text-xl py-3 text-white lg:text-2xl lg:py-5 hover:bg-blue-700 rounded-lg border-none "
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
