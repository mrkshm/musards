import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Wiggly from "../icons/wiggly.svg";
import { BLOCKS } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-textColor pt-2">{children}</p>;
    },
  },
};

export default function Carrousel({ projects }) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.fields.slug}>
            <div className=" grid grid-cols-1 lg:grid-cols-[45%_55%] w-full lg:mx-12 rounded-sm pb-8 px-0 lg:px-0 shadow-sm">
              <Link href={`/creations/${project.fields.slug}`}>
                <div className="bg-offWhite rounded-l-lg h-full cursor-pointer">
                  <picture>
                    <img
                      src={`https:${project.fields.cover.fields.file.url}`}
                      alt={project.fields.cover.fields.description}
                      className="rounded-l-sm object-contain w-full max-h-[450px] pb-8 lg:pb-0"
                    />
                  </picture>
                </div>
              </Link>
              <div className="bg-offWhite rounded-r-sm h-full px-2 pr-6">
                <div className="lg:pl-6 flex flex-col gap-2 h-full justify-between">
                  <div className="">
                    <div className="font-titleFont text-3xl tracking-widest">
                      <Link href={`/creations/${project.fields.slug}`}>
                        {project.fields.title}
                      </Link>
                    </div>
                    <div className="py-4">
                      {documentToReactComponents(
                        project.fields.textVitrine,
                        options
                      )}
                    </div>
                  </div>
                  <div className="pb-4">
                    <Link href={`/creations/${project.fields.slug}`}>
                      → Plus d&apos;infos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative">
        <Wiggly className="hidden z-50 lg:inline lg:-top-[140px] xl:-top-[180px] lg:h-[320px] xl:h-[444px] lg:ml-[48%] xl:ml-[46%]  fill-drk stroke-cream stroke-2 wiggles" />
      </div>
    </div>
  );
}
