import { useEffect, useState } from "react";
import { AppContext } from "./app.context";
import "./App.scss";
import { Banner } from "./Components/Banner";
import { FloatingButton } from "./Components/FloatingButton";
import { ImageCard } from "./Components/ImageCard";
import { ImageModal } from "./Components/ImageModal";
import { Loader } from "./Components/Loader";
import { getImages } from "./Services/images.service";

function App() {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorite, setShowFavorite] = useState(false);
  const [showModal, setShowModal] = useState({});
  useEffect(() => {
    getImages().then(res => {
      console.log(res);
      setImages(res);
    });
  }, []);
  const handleClick = () => {
    setShowFavorite(!showFavorite);
  };
  const handleShowModal = (image, text) => {
    if (image) {
      setShowModal({ image, text });
    } else {
      setShowModal({});
    }
  };
  return (
    <AppContext.Provider value={{ favorites, setFavorites, handleShowModal }}>
      <div className="app">
        <header className="app-header">
          <Banner />
        </header>
        <main>
          {Array.isArray(images) && images.length > 0 ? (
            <div className="cards-container">
              {images
                .filter(image =>
                  showFavorite ? favorites.find(id => id === image.id) : image
                )
                .map(image => (
                  <ImageCard key={image.id} favorites={favorites} {...image} />
                ))}
            </div>
          ) : (
            <div className="loader-container">
              <Loader />
            </div>
          )}
          <FloatingButton handleClick={handleClick} active={showFavorite} />
        </main>
      </div>
      {showModal.image && (
        <ImageModal {...showModal} handleShowModal={handleShowModal} />
      )}
    </AppContext.Provider>
  );
}

export default App;
