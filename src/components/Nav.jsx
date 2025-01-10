import PropTypes from "prop-types";
import TitleName from "@components/Title-Name";
import ButtonUse from "@components/Button-Use";

function Nav({ menuOptions }) {
  const { leftSection, centerSection, rightSection } = menuOptions;

  return (
    <nav className="w-full flex justify-between items-stretch h-16">
      <div className="flex-1 min-w-[200px] flex items-center">
        <TitleName nameUser={leftSection.title} size={leftSection.size} />
      </div>

      <div className="flex-1 flex items-center justify-center gap-3 min-w-[400px]">
        {centerSection.map((option) => (
          <ButtonUse
            key={option.id}
            propertiesButton={{
              text: {
                textButton: option.label,
              },
              style: {
                selectedStyle: "underline",
              },
            }}
            onClick={option.action}
          />
        ))}
      </div>

      <div className="flex-1 flex items-center justify-end min-w-[200px]">
        <ButtonUse
          propertiesButton={{
            text: {
              textButton: rightSection.label,
            },
            style: {
              selectedStyle: "animated",
            },
          }}
          onClick={rightSection.action}
        />
      </div>
    </nav>
  );
}

Nav.propTypes = {
  menuOptions: PropTypes.shape({
    leftSection: PropTypes.shape({
      title: PropTypes.string.isRequired,
      size: PropTypes.string,
    }).isRequired,
    centerSection: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        action: PropTypes.func,
      })
    ).isRequired,
    rightSection: PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func,
    }).isRequired,
  }).isRequired,
};

export default Nav;
