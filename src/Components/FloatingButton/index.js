import "./styles.scss";

export const FloatingButton = ({ handleClick, active }) => {
  return (
    <button onClick={handleClick} className="button" type="button">
      <span className="fa fa-star icon"></span>
      <span className="text">{active ? "Show All" : "My Favorites"}</span>
    </button>
  );
};
