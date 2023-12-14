import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function Card({ project }) {
  return (
    <div className=" bg-offWhite mb-6 shadow-sm hover:shadow-lg transition-all duration-700 rounded-sm text-textColor hover:bg-warning hover:bg-opacity-5">
      <Link href={`/creations/${project.fields.slug}`}>
        <a>
          <picture>
            <img
              className="rounded-t-sm h-[250px] w-full object-cover object-top md:object-center"
              src={project.fields.cover.fields.file.url}
              alt={project.fields.cover.fields.description}
            />
          </picture>
          <div className="p-3">
            <div className="font-titleFont text-2xl tracking-wide pb-2">
              {project.fields.title}
            </div>
            <div className="font-light text-sm flex flex-col sm:flex-row gap-2">
              <div
                className={`text-offWhite px-2 py-1 mb-2 max-w-[120px] text-center rounded-sm  ${
                  project.fields.byline.includes("Ciné-concert")
                    ? "bg-ocean"
                    : project.fields.byline.includes("Concert")
                    ? "bg-forrest"
                    : "bg-rosewood"
                }`}
              >
                {project.fields.byline}
              </div>

              {project.fields.destination &&
              project.fields.destination.includes("Jeune public") ? (
                <div className="bg-carrot mb-2 max-w-[120px] flex items-center text-center rounded-sm text-offWhite py-1 px-2">
                  {project.fields.destination}
                </div>
              ) : null}
            </div>
            <div className="pt-3 font-light">
              <ReactMarkdown>{project.fields.shortDescription}</ReactMarkdown>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
