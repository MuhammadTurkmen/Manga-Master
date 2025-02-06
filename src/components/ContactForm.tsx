import { Form } from "react-router-dom";
import image from "../../public/number-1.png";
import { Input } from "./ui/input";

function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-between px-8 gap-10 lg:gap-10 items-center">
      <img src={image} alt="img" className="lg:w-96 h-[628px] object-cover" />
      <div className="w-full text-white">
        <h1 className="mb-5">We Will Be Happy To Help You?</h1>
        <Form className="w-full flex flex-col gap-3 lg:gap-4">
          <div className="md:flex-row flex flex-col gap-3 md:gap-4">
            <Input
              type="text"
              placeholder="First Name"
              className="placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl "
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              className="placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl"
              required
            />
          </div>
          <Input
            type="email"
            className="w-full placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl"
            placeholder="Email"
            required
          />
          <Input
            type="number"
            required
            className="w-full placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl"
            placeholder="Phone Number"
          />
          <Input
            type="text"
            required
            className="w-full placeholder:text-white py-4 lg:text-xl lg:placeholder:text-xl"
            placeholder="Subject"
          />
          <textarea
            name=""
            required
            placeholder="Message"
            id=""
            rows={3}
            className="w-full placeholder:text-white bg-black py-2 px-3 border-1 border-white rounded-lg lg:placeholder:text-xl lg:text-xl"
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
