import Head from "next/head";
import Image from "next/image";

const BirthstonePage = () => {
  return (
    <>
      <Head>
        <title>Pearl/Alexandrite | Aesthetics in Jewelry</title>
        <meta
          name="description"
          content="Aesthetics in Jewelry - Pearl/Alexandrite Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h3 className="text-center">June Birthstone: Pearl and Alexandrite</h3>
        <section className="pb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <Image
                src="/stone-6.jpg"
                alt="June Birthstone"
                height={300}
                width={300}
              />
            </div>
          </div>
          <p>
            <strong>Pearl</strong>
          </p>
          <p>
            Pearl, a gift from the sea, is the world’s first gem and the
            birthstone for June. It is a traditional gift for brides,
            graduations, confirmations and the third and thirtieth wedding
            anniversaries.
          </p>
          <p>
            The Pearl was, for much of man’s history, the most valuable gem in
            the world. What changed that is the commercial culturing of Pearls.
          </p>
          <p>
            To produce a cultured Saltwater Pearl, a mother of Pearl bead, which
            is made from the shell of the North American Freshwater mussel, must
            be surgically inserted into the mantle of a host Saltwater Pearl
            oyster. In addition to this, a piece of epidermis taken from a donor
            Salt Water Pearl oyster must also be added. If the Pearl lives, it
            then secretes alternating layers of aragonite platelets (calcium
            carbonate with water entrained in it) and skin like patches of
            conchiolin (organic gluelike substance). These reactions build
            concentric layers, forming the Pearls skin, called the nacre.
          </p>
          <p>
            Freshwater Pearls are typically cultured without the bead. Just
            insertion of the foreign tissue into the mantle of the host mollusk
            is required to form a Freshwater Pearl. It is this lack of a
            starting bead that causes the formation of a Freshwater Cultured
            Pearl to be almost identical to the early Natural Pearl that are
            almost wholly nacre and so rare and so valuable.
          </p>
          <p>
            <strong>Alexandrite</strong>
          </p>
          <p>
            Alexandrite is considered one of the rarest and most amazing
            gemstones. It was discovered in 1834, in Russia, named in honor of
            and presented to Alexander II at his coming of age ceremony.
          </p>
          <p>
            It is a rare form of chrysoberyl that changes from Emerald Green or
            Blue Green color in daylight to Ruby Red or Violet in incandescent
            light. The degree of color change will have a great deal to do with
            its valuation as well as the size, quality of color and clarity.
          </p>
          <p>
            In 1987 a major find of Alexandrite was found in the Minas Gerais,
            Brazil. This region has produced the finest gems available since the
            late 1800&apos;s.
          </p>
          <p>
            Alexandrite is sensitive to heat, alkalines and knocks. It is fairly
            scratch resistant with a Moh&apos;s hardness of eight. It is not
            usually enhanced and can be ultrasonic or steam cleaned. This makes
            Alexandrite one of the more everyday wearable stones for
            connoisseurs and collectors.
          </p>
        </section>
      </article>
    </>
  );
};

export default BirthstonePage;
