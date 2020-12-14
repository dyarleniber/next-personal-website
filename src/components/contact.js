import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Loading from "./loading";
import Alert from "./alert";

export default function Contact() {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();
  const [errorAlert, setErrorAlert] = useState();
  const [successAlert, setSuccessAlert] = useState();

  const handleEmail = (event) => setEmail(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorAlert(false);
    setSuccessAlert(false);

    try {
      await axios.post("/api/contact", { email, message });
      setEmail("");
      setMessage("");
      setSuccessAlert(true);
    } catch (error) {
      setErrorAlert(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="p-8 border-t-2 border-gray-300">
      <h1 className="text-xl sm:text-2xl">Contact</h1>
      <div className="mt-4 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col text-gray-900 placeholder-gray-300"
        >
          {successAlert && (
            <Alert
              success
              message="I have received your message, I will get in touch soon! Thank you!"
            />
          )}

          {errorAlert && (
            <Alert message="Something went wrong. Please try again later." />
          )}

          <div className="relative mb-2 w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image
                src="/images/icons/envelope-solid.svg"
                alt="envelope-icon"
                width={16}
                height={16}
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="you@email.com"
              className="pl-12 block w-full border border-transparent py-2 px-4 bg-white shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Hey! I'm getting in touch to tell you about..."
            className="mb-4 w-full border border-transparent py-2 px-4 bg-white shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
            value={message}
            onChange={handleMessage}
            required
          ></textarea>

          {loading ? (
            <button
              type="button"
              className="block mx-auto bg-gray-300 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none cursor-not-allowed"
              disabled={true}
            >
              <Loading />
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-gray-300 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
            >
              Send
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
