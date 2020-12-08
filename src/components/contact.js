import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="p-8 border-t-2 border-gray-300">
      <h1 className="text-xl sm:text-2xl">Contact</h1>
      <div className="mt-4 flex justify-center items-center">
        <form className="w-full md:w-1/2 flex flex-col text-gray-900 placeholder-gray-300">
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
              type="email"
              placeholder="you@email.com"
              className="pl-12 block w-full border border-transparent py-2 px-4 bg-white shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
              required
            />
          </div>
          <textarea
            placeholder="Hey! I'm getting in touch to tell you about..."
            className="mb-4 w-full border border-transparent py-2 px-4 bg-white shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-300 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
