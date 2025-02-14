const HeroBanner = ({ data }) => (
  <section>
    <h2>{data?.headline || "Loading Hero..."}</h2>
    <p>{data?.description}</p>
  </section>
);

export default HeroBanner;
