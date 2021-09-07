import "./styles.scss";

export const ImageModal = ({ image, text, handleShowModal }) => {
  return (
    <div className="modal">
      <button
        type="button"
        onClick={() => handleShowModal()}
        className="close fa fa-close"
      ></button>
      <img className="modal-content" src={image} alt={text}></img>
      <div className="caption">{text}</div>
    </div>
  );
};
