import Image from "next/image";

const BirthstonePage = () => {
  return (
    <article className="container py-5">
      <h3 className="text-center">September Birthstone: Sapphire</h3>
      <section className="pb-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <Image
              src="/stone-9.jpg"
              alt="September Birthstone"
              height={300}
              width={300}
            />
          </div>
        </div>
        <p>
          When hearing the word Sapphire many people immediately envision a
          stunning violet-blue gemstone because the word “Sapphire” is Greek for
          blue. For centuries, the Sapphire has been referred to as the ultimate
          blue gemstone. Since Ancient times the Blue Sapphire represented a
          promise of honesty, loyalty, purity and trust. To keep with this
          tradition Sapphires are one of the most popular engagement gemstones
          today.
        </p>
        <p>
          Sapphire is found in many parts of the world, but the most prized
          Sapphires are from Myanmar (Burma), Kashmir and Sri Lanka. Sapphires
          with highly saturated violet-blue color and “velvety” or “sleepy”
          transparency are more rare. The purer the blue of the Sapphire, the
          greater the price. However, many people find that the darker hues of
          Sapphire can be just as appealing.
        </p>
        <p>
          Sapphires are not only blue, they come in almost every color of the
          rainbow: pink, yellow, orange, peach, and violet colors. The most
          sought-after color fancy Sapphire is the rare and beautiful
          Padparadscha: a pink-orange corundum with a distinctive salmon color
          reminiscent of a tropical sunset. These ultra-rare, ultra-expensive
          stones are among the most coveted gems in the world.
        </p>
      </section>
    </article>
  );
};

export default BirthstonePage;
