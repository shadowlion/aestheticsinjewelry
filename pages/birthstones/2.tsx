import Head from "next/head";
import Image from "next/image";

const BirthstonePage = () => {
  return (
    <>
      <Head>
        <title>Amethyst | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Amethyst Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h3 className="text-center">February Birthstone: Amethyst</h3>
        <section className="pb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <Image
                src="/stone-2.jpg"
                alt="February Birthstone"
                height={400}
                width={300}
              />
            </div>
          </div>
          <p>
            Amethyst (derived from Greek as &quot;not drunken&quot;) is purple
            quartz.
          </p>
          <p>
            Amethyst, the birthstone for February, is also the traditional gift
            for the sixth and seventeenth anniversaries. Amethyst is the most
            highly prized stone of the quartz family. It has been set in many
            crown jewels and religious artifacts and was considered with the
            same status as emeralds, rubies, sapphires and diamonds for
            centuries. In the nineteenth century huge deposits were discovered
            in Brazil and all of a sudden, what once was very rare became
            abundant and plentiful.
          </p>
          <p>
            Amethyst is formed in clear quartz by introducing manganese and iron
            into the lattice structure. Depending on the iron content the
            amethyst may range from pale red violet to deep violet.
          </p>
          <p>
            Amethyst has a Mohs hardness of 7. They are heat treated to reduce
            the brown if present or lighten the color of very dark amethyst. If
            overheated can change to citrine or prasiolite. There is much
            synthetic Amethyst in the market which should be disclosed before
            purchasing a stone. Whether pale red violet to deep violet, Amethyst
            is a stone to marvel at when you get red, blue, and purple flashes
            from it.
          </p>
        </section>
      </article>
    </>
  );
};

export default BirthstonePage;
