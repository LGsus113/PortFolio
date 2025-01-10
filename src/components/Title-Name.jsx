import PropTypes from "prop-types";

function TitleName({ nameUser, size = "6xl" }) {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
  };

  return (
    <h1
      className={`text-gradient-name font-bold ${
        sizeClasses[size] || "text-6xl"
      }`}
    >
      {nameUser}
    </h1>
  );
}

TitleName.propTypes = {
  nameUser: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    "sm",
    "base",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl",
  ]),
};

TitleName.defaultProps = {
  size: "6xl",
};

export default TitleName;
