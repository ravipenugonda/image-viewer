export const ImageCard = ({ image, likes, tags, text }) => {
  return (
    <div className="img-card-container">
      <div className="image">
        <img src={image} alt={text} loading="lazy" height={300} width={300} />
      </div>
      <div className="body">
        <div>
          <p>{text}</p>
          <button>Add</button>
        </div>
        <div>
          <div>{tags.join(", ")}</div>
          <p>{likes}</p>
        </div>
      </div>
    </div>
  );
};
