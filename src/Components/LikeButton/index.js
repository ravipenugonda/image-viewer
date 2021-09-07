import { useEffect, useState } from "react";
import "./styles.scss";

export const LikeButton = ({ callback, active }) => {
  const [classList, setClassList] = useState([]);
  const [starClass, setStarClass] = useState("fa-star-o");
  const [infoClass, setInfoClass] = useState("");

  useEffect(() => {
    if (active) {
      setClassList(["active", "active-2"]);
      setTimeout(() => {
        setStarClass("fa-star");
        setClassList(["active", "active-2", "active-3"]);
      }, 150);
      setInfoClass("info-tog");
      setTimeout(() => {
        setInfoClass("");
      }, 1000);
    } else {
      setClassList(["active-2"]);
      setTimeout(() => {
        setClassList([]);
      }, 30);
      setTimeout(() => {
        setStarClass("fa-star-o");
      }, 15);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleClick = e => {
    callback(!active);
  };

  return (
    <div
      tabIndex={0}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      role="button"
      className={`click ${classList.join(" ")}`}
      onKeyUp={e => e.key === "Enter" && handleClick(e)}
      onClick={handleClick}
    >
      <span className={`fa ${starClass}`}></span>
      <div className="ring"></div>
      <div className="ring2"></div>
      <p className={`info ${infoClass}`}>Added to favorites!</p>
    </div>
  );
};
