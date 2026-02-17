const MapSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Our Location</h2>

      <div className="rounded-2xl overflow-hidden shadow-xl border bg-base-100">
        <iframe
          src="https://www.google.com/maps?q=Chattogram%20Bangladesh&output=embed"
          width="100%"
          height="350"
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
