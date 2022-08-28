import Head from "next/head";
import { getEntries } from "../lib/contentful";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";

export default function Home({ categoryItems, projects }) {
  return (
    <div>
      <Head>
        <title>Musards</title>
        <meta name="description" content="Le site de l'association Musards." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-8 text-drk relative flex flex-col bg-cream h-full">
        <Carrousel projects={projects} />

        <Categories categoryItems={categoryItems} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await getEntries("musCategories");
  const proRes = await getEntries("musProject");
  const filterRes = proRes.items.filter((res) => res.fields.enVedette);

  return {
    props: {
      categoryItems: res.items,
      projects: filterRes,
    },
    revalidate: 20,
  };
}
