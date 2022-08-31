import Head from "next/head";

export default function MetaHead({ pageTitle }) {
  return (
    <Head>
      <title>La Compagnie Musards{pageTitle ? ` - ${pageTitle}` : null}</title>
      <meta
        name="description"
        content="Informations de contact de la Compagnie Musards, spécialisée dans la production et diffusion de concerts, ciné-concerts et spectacles."
      />
      <link rel="icon" href="/musards_logo.jpg" />
    </Head>
  );
}
