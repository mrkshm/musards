import Straight from "../../icons/straight.svg";
import Dropdown from "../../components/Dropdown";
import Card from "../../components/Card";
import { useState, useMemo, useEffect } from "react";
import { getEntries } from "../../lib/contentful";
import Turny from "../../icons/turny.svg";
import { sortAsc } from "../../lib/helpers";

const genreOptions = [
  {
    title: "Tous les spectacles",
    slug: "",
    description: "",
    current: true,
  },
  {
    title: "Concerts",
    slug: "Concert",
    description: "",
    current: false,
  },
  {
    title: "Ciné-concerts",
    slug: "Ciné-concert",
    description: "",
    current: false,
  },
  {
    title: "Théâtre",
    slug: "Théâtre",
    description: "",
    current: false,
  },
];

const audienceOptions = [
  {
    title: "Tout public",
    slug: "",
    description: "",
    current: true,
  },
  {
    title: "Jeune public",
    slug: "Jeune public",
    description: "",
    current: false,
  },
  {
    title: "Adultes",
    slug: "Adultes",
    description: "",
    current: false,
  },
];

const publishingOptions = [
  {
    title: "Spectacles actuels",
    slug: "actuel",
    description: "",
    current: true,
  },
  {
    title: "Spectacles passés",
    slug: "archived",
    description: "",
    current: false,
  },
  {
    title: "En préparation",
    slug: "enPreparation",
    description: "",
    current: false,
  },
  {
    title: "Tous",
    description: "",
    current: false,
  },
];

function Projets({ projects }) {
  const [genre, setGenre] = useState(genreOptions[0]);
  const [audience, setAudience] = useState(audienceOptions[0]);
  const [published, setPublished] = useState(publishingOptions[0]);

  return (
    <div>
      {/* Header */}
      <div className="relative pb-12 flex flex-col md:flex-row justify-between">
        <div>
          <div className="min-w-[220px]">
            <h1 className="text-4xl font-titleFont font-bold text-textColor pb-4 md:pb-0">
              Nos projets
            </h1>
            <div className="-rotate-[88deg] hidden md:inline absolute w-[8px] h-[20px] stroke-2">
              <Straight />
            </div>
          </div>
        </div>
        {/* Right side */}

        <div className="flex flex-col md:flex-row gap-1 md:gap-4 pt-1">
          <Turny className="hidden md:inline w-10 -mt-16" />
          <Dropdown
            publishingOptions={genreOptions}
            selected={genre}
            setSelected={setGenre}
          />
          <Dropdown
            publishingOptions={audienceOptions}
            selected={audience}
            setSelected={setAudience}
          />
          <Dropdown
            publishingOptions={publishingOptions}
            selected={published}
            setSelected={setPublished}
          />
        </div>
      </div>

      {/* Main */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {projects
          .filter((project) => project.fields.byline.includes(genre.slug))
          .filter((project) =>
            project.fields.destination.includes(audience.slug)
          )
          .filter((project) => {
            if (published.slug === "enPreparation") {
              return project.fields.inPreparation;
            } else if (published.slug === "archived") {
              return project.fields.archive;
            } else if (published.slug === "actuel") {
              return !project.fields.inPreparation && !project.fields.archive;
            } else {
              return project;
            }
          })
          .sort(sortAsc)
          .map((project) => (
            <Card project={project} key={project.fields.slug} />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await getEntries("musProject");

  return {
    props: {
      projects: res.items,
    },
    revalidate: 20,
  };
}

export default Projets;
