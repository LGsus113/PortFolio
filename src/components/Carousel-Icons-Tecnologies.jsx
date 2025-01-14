import PropTypes from "prop-types";

function CarouselIconsTecnologies({ data }) {
  const { iconsData, iconsDimensity } = data;

  const classCharacter = (cls) => {
    return `${cls} absolute left-full animation-run group-hover:animation-run-stopped`;
  };

  return (
    <div
      className="w-full relative flex"
      style={{
        "--icon-size": iconsDimensity.size,
        "--padding-icon": iconsDimensity.padding,
        height: "calc(var(--icon-size) + (2 * var(--padding-icon)))",
        fontSize: "var(--icon-size)",
        padding: "var(--padding-icon)",
      }}
    >
      {iconsData.map(({ IconComponent, className }, index) => (
        <IconComponent
          key={index}
          className={classCharacter(className)}
          style={{ "--posicion": index + 1 }}
        />
      ))}
    </div>
  );
}

CarouselIconsTecnologies.propTypes = {
  data: PropTypes.shape({
    iconsData: PropTypes.arrayOf(
      PropTypes.shape({
        IconComponent: PropTypes.elementType.isRequired,
        className: PropTypes.string.isRequired,
      })
    ),
    iconsDimensity: PropTypes.shape({
      size: PropTypes.string.isRequired,
      padding: PropTypes.string.isRequired,
    }),
  }),
};

export default CarouselIconsTecnologies;
