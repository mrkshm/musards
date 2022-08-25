import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import VideoPlayer from "./VideoPlayer";
import Link from "next/link";

const options = {
  renderText: (text) => {
    // @ts-ignore
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-textColor pb-4">{children}</p>;
    },
  },
};

export default function AgendaCard({ spectacle }) {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "-100vw", opacity: 0 });
    }
  }, [inView, ref, animation]);

  return (
    <div ref={ref} className="agendaCard">
      <motion.div animate={animation}>
        <div className="grid md:grid-cols-2">
          <picture className="max-w-[90%]">
            <img
              className="pb-4 max-h-[50vh] w-[90%] object-cover object-bottom"
              src={`https:${spectacle.fields.image.fields.file.url}`}
              alt={spectacle.fields.image.description}
            />
          </picture>

          <div className="">
            <Link
              href={`http://localhost:3000/projets/${spectacle.fields.lienMusards}`}
            >
              <div className="text-4xl font-titleFont pt-8 md:pt-0 cursor-pointer">
                {spectacle.fields.title}
              </div>
            </Link>
            <div className="contentfulCardText py-8">
              {documentToReactComponents(spectacle.fields.description, options)}
            </div>

            {spectacle.fields.video ? (
              <div className="md:w-[60%]">
                <VideoPlayer url={spectacle.fields.video} />
              </div>
            ) : null}
          </div>
        </div>
        <hr className="py-8" />
      </motion.div>
    </div>
  );
}
