import Image from "next/image";

const BirthstonePage = () => {
  return (
    <article className="container py-5">
      <h3 className="text-center">August Birthstone: Peridot</h3>
      <section className="pb-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <Image
              src="/stone-8.jpg"
              alt="August Birthstone"
              height={300}
              width={300}
            />
          </div>
        </div>
        <p>
          Peridot is one of the few gemstones that exists in only one color; a
          distinctive signature lime green. In ancient times it was believed
          that Peridot was a gift of Mother Nature to celebrate the annual
          creation of a new world. When presented as a gift, Peridot is said to
          bring the wearer magical powers and healing properties to protect
          against nightmares. It is also said to instill power, and influence
          through the wearing of the gemstone.
        </p>
        <p>
          Today, most Peridot comes from Arizona but it is also found in China,
          Myanmar, and Pakistan. Peridot is available in several colors ranging
          from yellowish green to brown, but the bright lime greens and olive
          greens are the most desired. If you prefer citrus tones or earth
          tones, you’ll find that Peridot belongs in your jewelry collection.
        </p>
        <p>
          Peridot gemstones smaller than three carats are very common but
          gemstones over five carats are rare and therefore have a higher value.
          Peridot in 10 to 15 carats are even more rare, but provide a big and
          bold look for an affordable price.
        </p>
      </section>
    </article>
  );
};

export default BirthstonePage;
