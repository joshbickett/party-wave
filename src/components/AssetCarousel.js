const AssetCarousel = ({ assets }) => {
  // {currentProject?.assets?.youtube && (
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={currentProject?.assets?.youtube
          .split(".be/")
          .join("be.com/embed/")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default AssetCarousel;
