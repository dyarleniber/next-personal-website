import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero({ name, email, bio, location, socialmedia }) {
  return (
    <>
      <section
        id="home"
        className={`${styles.container} px-8 flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-50 to-gray-300 overflow-hidden`}
      >
        <h1 className="text-4xl md:text-5xl">{`Hi, I'm ${name}`}</h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl">{bio}</p>
        <div className="mt-4 flex items-center text-sm font-medium tracking-wider">
          <Image
            src="/images/icons/map-marker-alt-solid.svg"
            alt="map-marker-alt-icon"
            width={16}
            height={16}
          />
          <p className="ml-2">{location}</p>
        </div>
        <div className="mt-2 flex items-center text-sm font-medium tracking-wider">
          <Image
            src="/images/icons/envelope-solid.svg"
            alt="envelope-icon"
            width={16}
            height={16}
          />
          <p className="ml-2">{email}</p>
        </div>
        <div className="mt-4 flex flex-wrap">
          {socialmedia.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              className="ml-4 transition duration-500 ease-in-out transform hover:scale-110"
            >
              <Image
                src={link.iconpath}
                alt={link.name}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>
        <div className="mt-4 transition duration-500 ease-in-out transform hover:scale-110 bg-gray-100 font-semibold text-sm sm:text-base py-3 px-6 rounded-md shadow-lg">
          <a href="#contact">Get In Touch</a>
        </div>
      </section>
    </>
  );
}
