import { getEntry } from "../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Straight from "../icons/straight.svg";
import MetaHead from "../components/MetaHead";

const renderOptions = {
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

function Compagnie({ presentation }) {
  return (
    <div className="compagnie">
      <MetaHead pageTitle="à propos" />
      <div className="relative pb-12">
        <h1 className="text-4xl font-titleFont font-bold text-textColor">
          La Compagnie
        </h1>
        <div className="-rotate-[88deg] absolute w-[10px] h-[60px] left-[20px] top-3 stroke-2">
          <Straight />
        </div>
      </div>

      {documentToReactComponents(presentation.fields.content, renderOptions)}
    </div>
  );
}

export async function getStaticProps() {
  const res = await getEntry("7fJbW4N7gjAj4uERJnIJ6A");

  return {
    props: {
      presentation: res,
    },
    revalidate: 20,
  };
}

export default Compagnie;
