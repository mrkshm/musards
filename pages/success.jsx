import MetaHead from "../components/MetaHead";
import Straight from "../icons/straight.svg";

export default function Success() {
  return (
    <div className="">
      <MetaHead pageTitle="Merci !" />
      <div className="relative pb-12">
        <h1 className="text-4xl font-titleFont font-bold text-textColor">
          Contact
        </h1>
        <div className="-rotate-[88deg] absolute w-[6px] h-[20px] stroke-2">
          <Straight />
        </div>
      </div>
      <div className="relative">
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-cream py-16 px-0 sm:px-0 lg:col-span-2 md:pr-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg">
              <h2 className="text-2xl font-extrabold tracking-loose text-gray-900 sm:text-3xl">
                Succes !
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Votre message à la Compagnie Musards <br />à été envoyé.
              </p>
              <p className="mt-3 text-lg leading-6 text-gray-500">Merci !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
