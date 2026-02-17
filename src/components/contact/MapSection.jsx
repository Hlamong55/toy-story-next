const MapSection = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902291236999!2d90.39158531537333!3d23.75091258459045"
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection;
