import { useRouter } from "next/router";
import Straight from "../../icons/straight.svg";
import Dashed from "../../icons/dashed.svg";
import Link from "next/link";
import { getEntryWithSlug, getEntries } from "../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Download from "../../icons/download.svg";
import VideoPlayer from "../../components/VideoPlayer";
import ImageComp from "../../components/ImageComp";
import MetaHead from "../../components/MetaHead";

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-textColor pb-4">{children}</p>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <div className="w-full">
          <picture>
            <img
              className="object-contain max-w-[85%] max-h-[400px] my-8"
              src={`https:${node.data.target.fields.file.url}`}
              alt="Présentation Musards"
            ></img>
          </picture>
        </div>
      );
    },
  },
};

export default function ProjectPage({ project }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <MetaHead pageTitle={project.fields.title} />
      <div className="">
        <div>
          <div className="w-full">
            <div className="text-4xl font-titleFont flex flex-col-reverse md:flex-row justify-between relative">
              <div className="w-full">
                {project.fields.title}
                <Straight className="hidden md:inline absolute left-[180px] -top-[140px] h-[400px] rotate-[92deg]" />
              </div>

              <div className="text-sm md:text-lg min-w-[200px] self-end text-right">
                <Link href="/creations">← &nbsp;&nbsp;Retour aux projets</Link>
              </div>
            </div>
            <picture className="md:hidden">
              <img
                src={`https:${project.fields.cover.fields.file.url}`}
                alt={project.fields.cover.fields.description}
                className="py-4"
              />
            </picture>

            <div className="pt-0 md:pt-8">
              {project.fields.byline} {project.fields.destination}
            </div>

            {/* Container designer */}
            <div className="w-full grid grid-cols-1 md:grid-cols-[7fr,4fr] gap-4">
              {/* Left side */}
              <div className="">
                <div className="py-4 font-light pr-12">
                  {project.fields.distribution}
                </div>
                <div className="">
                  {documentToReactComponents(
                    project.fields.description,
                    renderOptions
                  )}
                </div>

                <div className="flex text-md gap-12 py-4">
                  {project.fields.rider ? (
                    <Link
                      href={`https:${project.fields.rider.fields.file.url}`}
                    >
                      <div className="flex gap-2 items-center cursor-pointer">
                        <Download className="w-8 h-8" />
                        Fiche technique
                      </div>
                    </Link>
                  ) : null}

                  {project.fields.dossier ? (
                    <Link
                      href={`https:${project.fields.dossier.fields.file.url}`}
                    >
                      <div className="flex gap-2 items-center cursor-pointer">
                        <Download className="w-8 h-8" />
                        Dossier du spectacle
                      </div>
                    </Link>
                  ) : null}
                </div>

                {/* Video */}
                <div className="w-full md:max-w-[80%] pt-8  ">
                  <VideoPlayer url={project.fields.video} />
                </div>
              </div>
              {/* Right Side */}
              <div>
                <picture className="hidden md:inline">
                  <img
                    src={`https:${project.fields.cover.fields.file.url}`}
                    alt={project.fields.cover.fields.description}
                    className="pb-8"
                  />
                </picture>
                {/* mp3 */}
                {project.fields.mp3s ? (
                  <div className="bg-drk font-titleFont pr-12 rounded-md my-8 py-4 text-offWhite z-0">
                    <div className="text-2xl pb-4 px-4">Extraits</div>
                    {project.fields.mp3s.map((mp3, i) => (
                      <div key={mp3.sys.id} className="relative">
                        <div className="text-offWhite relative px-4 pb-6 pt-3">
                          <div className="pb-2">{mp3.fields.title}</div>
                          <div className="z-40">
                            <audio
                              className="w-full z-40 pb-6"
                              controls={true}
                              src={mp3.fields.file.url}
                            />
                          </div>
                        </div>
                        <Dashed
                          className={`text-offWhite fill-offWhite z-0 rotate-[92deg] w-32 h-64 absolute -top-[32px] pointer-events-none left-[82px] ${
                            i === project.fields.mp3s.length - 1
                              ? "hidden"
                              : null
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Images */}
                {project.fields.images ? (
                  <div className="flex">
                    {project.fields.images.map((image, i) => (
                      <div key={image.sys.id} className="">
                        <ImageComp
                          image={image}
                          odd={i === 0 || i % 2 === 0 ? false : true}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await getEntries("musProject");

  const paths = res.items.map((project) => {
    return {
      params: { slug: project.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await getEntryWithSlug(slug);
  return {
    props: {
      project: res.items[0],
    },
    revalidate: 20,
  };
};
