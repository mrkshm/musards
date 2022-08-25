import {
  MailIcon,
  PhoneIcon,
  IdentificationIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Straight from "../icons/straight.svg";

export default function Contact() {
  return (
    <div className="">
      <div className="relative pb-12">
        <h1 className="text-4xl font-titleFont font-bold text-textColor">
          Contact
        </h1>
        <div className="-rotate-[88deg] absolute w-[6px] h-[20px] stroke-2">
          <Straight />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-cream py-16 px-0 sm:px-0 lg:col-span-2 md:pr-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg">
              <h2 className="text-2xl font-extrabold tracking-loose text-gray-900 sm:text-3xl">
                Musards
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Pour nous contacter, veuillez utiliser les informations
                ci-dessous ou remplir le formulaire. À bientôt.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Adresse postale</dt>
                  <dd>
                    <p>9 rue Jacques Kablé</p>
                    <p>75018 Paris</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Numèros téléphone</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+33 (0) 6 15 44 52 48</span>
                  </dd>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+33 (0) 7 67 26 26 36</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />

                    <span className="ml-3">
                      <Link href="contact@musards.fr">
                        <a className="hover:text-textColor transition duration-300">
                          contact@musards.fr
                        </a>
                      </Link>
                    </span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Numèro SIRET</dt>
                  <dd className="flex">
                    <IdentificationIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">SIRET 818 121 634 00047</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="/success"
                name="contact"
                method="POST"
                data-netlify="true"
                className="grid grid-cols-1 gap-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Votre email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-ocean focus:border-ocean border-gray-300 rounded-md"
                    placeholder="Votre téléphone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-ocean focus:border-ocean border border-gray-300 rounded-md"
                    placeholder="Votre message"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-ocean hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
