import Head from "next/head";
import Image from "next/image";

const BirthstonePage = () => {
  return (
    <>
      <Head>
        <title>Tourmaline | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Tourmaline Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h3 className="text-center">October Birthstone: Tourmaline</h3>
        <section className="pb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <Image
                src="/stone-10.jpg"
                alt="October Birthstone"
                height={400}
                width={300}
              />
            </div>
          </div>
          <p>
            Available in a spectrum of colors and color combinations, Tourmaline
            lives up to its name, which means “mixed stone”. With a rainbow of
            colors, Tourmaline can easily enhance any jewelry collection.
            Cranberry red, hot magenta, bubblegum pink, peach and orange, canary
            yellow, mint, grass and forest green, ocean blue, violet: Tourmaline
            is all of these and more.
          </p>
          <p>
            Tourmaline is also known for displaying several colors in one
            gemstone. These bi-color or tri-color gems are formed in many
            combinations and are highly prized. One multi-color variety is known
            as Watermelon Tourmaline and features green, pink, and white color
            bands. To resemble its namesake, the gemstone is cut into thin
            slices having a pink center, white ring, and green edge.
          </p>
          <p>
            With Tourmaline available in so many colors, you’re sure to find one
            in your favorite color.
          </p>
        </section>
      </article>
    </>
  );
};

export default BirthstonePage;
