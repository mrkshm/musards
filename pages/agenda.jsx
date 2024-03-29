import { getEntries } from "../lib/contentful";
import { sortAsc } from "../lib/helpers";
import Straight from "../icons/straight.svg";
import AgendaCard from "../components/AgendaCard";
import MetaHead from "../components/MetaHead";

function Agenda({ projects }) {
  return (
    <div>
      <MetaHead pageTitle="Agenda" />
      <div className="">
        <div className="relative pb-12">
          <h1 className="text-4xl font-titleFont font-bold text-textColor">
            Agenda
          </h1>
          <div className="-rotate-[88deg] absolute w-[5px] h-[40px] left-[20px] top-6 stroke-2">
            <Straight />
          </div>
        </div>
      </div>
      {projects
        .sort((a, b) => {
          // Assuming projects without an order are either null or undefined
          if (a.fields.order === null || a.fields.order === undefined) return 1;
          if (b.fields.order === null || b.fields.order === undefined)
            return -1;

          // If both have orders, sort them numerically
          return a.fields.order - b.fields.order;
        })
        .map((project) => (
          <div key={project.sys.id}>
            <AgendaCard spectacle={project} />
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await getEntries("agenda");
  const musRes = await res.items.filter((res) => res.fields.musards);

  return {
    props: {
      projects: musRes,
    },
    revalidate: 20,
  };
}

export default Agenda;
