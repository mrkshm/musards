import Head from "next/head";

export default function MetaHead({ pageTitle }) {
  const titleText = `La Compagnie Musards${pageTitle ? ` - ${pageTitle}` : ""}`;

  return (
    <Head>
      <title>{titleText}</title>
      <meta
        name="description"
        content="La Cie MUSARDS est une association créée par le pianiste-compositeur Vadim Sher, dédiée à la production et la diffusion de ciné-concerts, concerts et spectacles."
      />
      <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
    </Head>
  );
}
