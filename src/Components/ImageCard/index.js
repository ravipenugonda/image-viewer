import { useAppContext } from "../../app.context";
import { LikeButton } from "../LikeButton";
import "./styles.scss";
export const ImageCard = ({ id, image, likes, tags, text }) => {
  const { favorites, setFavorites, handleShowModal } = useAppContext();
  const handleFavorite = flag => {
    if (flag) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter(fav => fav !== id));
    }
  };
  return (
    <div className="img-card-container">
      <div className="image">
        <button type="button" onClick={() => handleShowModal(image, text)}>
          <img src={image} alt={text} loading="lazy" height={300} width={300} />
        </button>
      </div>
      <div className="body">
        <p>{text}</p>
        <div className="footer">
          <div>
            {tags.map(tag => (
              <span key={tag}> #{tag}</span>
            ))}
          </div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
            </svg>
            {likes}
          </p>
        </div>
        <LikeButton
          active={favorites.indexOf(id) > -1 ? true : false}
          callback={handleFavorite}
        />
      </div>
    </div>
  );
};
