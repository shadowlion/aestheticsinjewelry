import Head from "next/head";
import Image from "next/image";

const BirthstonePage = () => {
  return (
    <>
      <Head>
        <title>Emerald | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Emerald Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h3 className="text-center">May Birthstone: Emerald</h3>
        <section className="pb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <Image
                src="/stone-5.jpg"
                alt="May Birthstone"
                height={400}
                width={300}
              />
            </div>
          </div>
          <p>
            Emeralds are considered the birthstone of May and a talisman for
            Gemini. They are one of the most prized of all gemstones. Since
            2000BC they have been highly cherished as a symbol of romance,
            devotion, good luck and fortune.
          </p>
          <p>
            The value of any colored stone is greatly dependent upon the purity
            and intensity of its color. Fine Emerald can deliver incomparably
            rich green color. The word Emerald itself conjures up the color
            green.
          </p>
          <p>
            <strong>Why Is Emerald Green?</strong>
          </p>
          <p>
            Emerald belongs to the beryl group of minerals (Aluminum Beryllium
            Silicate). What causes Beryl (otherwise colorless) to be green and
            become Emerald is the incorporation of Chromium and or Vanadium into
            the crystal structure during formation. However, what makes Emerald
            green also stresses the crystal lattice structure. This typically
            causes fissures and minute internally healed fractures to occur in
            the stone and permeate to the surface.
          </p>
          <p>
            These may or may not be visible to the eye. They are called veils or
            inclusions, causing the internal appearance of the stone to be
            called Le Jardin or The Garden. This can be helpful in identifying
            the origin of the stone or the stone itself, like a fingerprint, if
            needed.
          </p>
          <p>
            Emeralds are typically not eye clean and almost all are treated with
            oil, wax or resin. The value of the Emerald is not affected by the
            type of treatment, but the degree of treatment.
          </p>
          <p>
            The treatment affect is much akin to putting lemon oil or waxing a
            dulled antique piece of furniture and will be required to be done
            again from time to time. Steam cleaning, ultrasonic cleaning and
            jewelry cleaning solvent will require this to be done more
            frequently to prevent a change of appearance of the Emerald,
            however, there is a relatively new treatment that is permanent. This
            allows the Emerald to be used in an ultrasonic cleaner or light
            steaming.This negates the need for special handling and care of your
            Emerald. It is called Excel and it can be removed completely if
            desired.
          </p>
          <p>
            Whatever treatment an Emerald has it should be disclosed to the
            customer before the stone is purchased.
          </p>
          <p>
            One of the magical things about Emerald is whether it is pale or
            very highly saturated in color, bright or muted with richness they
            all have presence and beauty that once lived with is hard to live
            without. They are very effective as remembrances to the special
            moments of our lives.
          </p>
        </section>
      </article>
    </>
  );
};

export default BirthstonePage;
