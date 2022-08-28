import { sortAsc } from "../lib/helpers";
import Link from "next/link";

export default function Categories({ categoryItems }) {
  return (
    <div className="h-full bg-cream">
      <div className="relative pt-16 pb-20 px-0 sm:px-0 lg:pt-24 lg:pb-28 lg:px-0">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto ">
          <div className="text-left ">
            <h2 className="text-3xl tracking-tight font-titleFont text-gray-900 sm:text-4xl sm:tracking-tight">
              Nos créations :
            </h2>
            <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:max-w-none">
            {categoryItems.sort(sortAsc).map((category) => (
              <div
                key={category.fields.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <picture>
                    <img
                      className="h-48 w-full object-cover"
                      src={category.fields.imageUrl.fields.file.url}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="flex-1 bg-offWhite py-6 px-2 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link
                      href={{
                        pathname: category.fields.href,
                        query: { cat: category.fields.title.replace(" ", "-") },
                      }}
                      className="block mt-2"
                    >
                      <a>
                        <p className="text-2xl font-titleFont text-gray-900">
                          {category.fields.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {category.fields.description}
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
