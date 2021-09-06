import { useEffect, useState } from "react";
import "./App.scss";
import { Banner } from "./Components/Banner";
import { ImageCard } from "./Components/ImageCard";
import { Loader } from "./Components/Loader";
import { getImages } from "./Services/images.service";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages().then(res => {
      console.log(res);
      setImages(res);
    });
  }, []);
  return (
    <div className="app">
      <header className="app-header">
        <Banner />
      </header>
      <main>
        {Array.isArray(images) && images.length > 0 ? (
          images.map(image => <ImageCard key={image.id} {...image} />)
        ) : (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
