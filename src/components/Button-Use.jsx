import PropTypes from "prop-types";

function ButtonUse({ propertiesButton, onClick }) {
  const { textButton } = propertiesButton.text;
  const { selectedStyle } = propertiesButton.style;

  const validStyles = ["animated", "underline"];
  const isValidStyle = validStyles.includes(selectedStyle);

  if (!isValidStyle) return null;

  const classStyle =
    selectedStyle === "animated" ? "button-animated" : "button-underline";

  return (
    <div className="flex gap-4">
      <button className={classStyle} onClick={onClick}>
        {textButton}
      </button>
    </div>
  );
}

ButtonUse.propTypes = {
  propertiesButton: PropTypes.shape({
    text: PropTypes.shape({
      textButton: PropTypes.string.isRequired,
    }).isRequired,
    style: PropTypes.shape({
      selectedStyle: PropTypes.oneOf(["animated", "underline"]).isRequired,
    }).isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default ButtonUse;
