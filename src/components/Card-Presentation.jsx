import PropTypes from "prop-types";

function CardPresentation({ images }) {
  return (
    <div className="relative w-[450px] h-[450px] bg-gray-800 rounded-lg overflow-hidden">
      <img
        src={images.form}
        alt="form"
        className="card-image-form"
      />
      <img
        src={images.content}
        alt="content"
        className="card-image-content"
      />
    </div>
  );
} 

CardPresentation.propTypes = {
  images: PropTypes.shape({
    form: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPresentation;
