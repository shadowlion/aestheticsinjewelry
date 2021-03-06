import Head from "next/head";
import Image from "next/image";

const BirthstonePage = () => {
  return (
    <>
      <Head>
        <title>Aquamarine | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Aquamarine Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h3 className="text-center">March Birthstone: Aquamarine</h3>
        <section className="pb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <Image
                src="/stone-3.jpg"
                alt="March Birthstone"
                height={400}
                width={300}
              />
            </div>
          </div>
          <p>
            Aquamarine, the birthstone for March, is also the alternative gift
            for the sixteenth and traditional gift of the eighteenth wedding
            anniversaries. Aquamarine is named for its color (Latin for
            &quot;water of the sea&quot;). It would be clear Beryl (aluminum
            beryllium silicate) without traces of Iron introduced into the
            crystal lattice structure.
          </p>
          <p>
            Gem quality aquamarine grows in pegmatites, where crystals can be
            very large and very pure. Aquamarine is readily available in very
            large sizes, but is less practical for jewelry use in the larger
            sizes so prices per carat tend to decrease over 25 carats. Smaller
            sizes are rarely saturated in color enough to be attractive;
            however, some African material is known for its intense color in the
            stones under 5 carats and can sell for more per carat than larger
            stones of the same quality.
          </p>
          <p>
            Nearly all blue is heat treated to remove the brown-yellow color
            component. Aquamarine&apos;s most valuable color is the moderately
            strong, medium-dark blue to slightly greenish blue.
          </p>
        </section>
      </article>
    </>
  );
};

export default BirthstonePage;
