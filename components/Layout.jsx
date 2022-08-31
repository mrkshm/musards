/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Sputter from "../icons/sputter.svg";
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "Accueil", href: "/", current: true },
  { name: "Nos créations", href: "/creations", current: false },
  { name: "Agenda", href: "/agenda", current: false },
  { name: "La Compagnie", href: "/compagnie", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const currentPage = router.pathname;

  const pageTitle = useMemo(() => {
    switch (currentPage) {
      case "/creations":
        return "Nos creations";
        break;
      case "/agenda":
        return "Agenda";
        break;
      case "/contact":
        return "Contact";
        break;
      case "/presentation":
        return "À propos";
        break;
      default:
        return "";
        break;
    }
  }, [currentPage]);

  useMemo(() => {
    navigation.forEach((navItem) => {
      if (navItem.href === currentPage) {
        navItem.current = true;
      } else {
        navItem.current = false;
      }
    });
  }, [currentPage]);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-drk">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-cream"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-0 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center px-4">
                      <picture className="">
                        <img
                          className="w-[200px]"
                          src="/musards_logo.jpg"
                          alt="Workflow"
                        />
                        <div className="text-cream text-sm font-titleFont">
                          musique - théâtre - ciné-concerts
                        </div>
                      </picture>
                    </div>
                    <nav className="mt-4 px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-indigo-600 text-offWhite"
                              : "text-offWhite hover:bg-indigo-600 hover:bg-opacity-75",
                            "group flex items-center px-2 py-2 text-lg font-medium rounded-md"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 bg-drk">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <Link href="/">
                  <picture className="w-full">
                    <img
                      className="w-[200px] -mt-8"
                      src="/musards_logo.jpg"
                      alt="Logo Musards"
                    />
                  </picture>
                </Link>
                <div className="text-cream text-sm w-full pt-1 font-titleFont">
                  musique - théâtre - ciné-concerts
                </div>
              </div>
              <nav className="mt-24 flex-1 px-2 space-y-3">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link href={item.href}>
                      <a
                        className={classNames(
                          item.current
                            ? " text-cream cursor-default"
                            : "text-cream hover:text-offWhite hover:bg-forrest hover:bg-opacity-20",
                          "group flex items-center px-4 py-2 text-2xl font-titleFont font-medium rounded-md"
                        )}
                      >
                        {item.name}
                        {item.current ? (
                          <Sputter
                            className={`w-10 ${
                              currentPage === "/compagnie" ||
                              currentPage === "/creations"
                                ? "h-40 left-20 -rotate-[89deg]"
                                : "h-24 stroke-cream stroke-2 left-12 -rotate-[89deg]"
                            } absolute fill-cream mt-[28px]`}
                          />
                        ) : null}
                      </a>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-cream border-opacity-10 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-xs font-light text-cream group-hover:text-offWhite">
                      <span className="text-md">©</span> Musards 2022 |
                      <br />
                      Tous droits réservés.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1 bg-cream min-h-screen">
          <div className="sticky top-0 z-10 flex justify-between items-center md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-drk">
            <div className="ml-2">
              <picture>
                <img className="h-12 pb-1" src="/musards_logo.jpg" alt="" />
              </picture>
            </div>
            <button
              type="button"
              className={`mr-2 ${sidebarOpen ? "hidden" : "inline"}
              } -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6 text-cream" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <div className="h-full">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
