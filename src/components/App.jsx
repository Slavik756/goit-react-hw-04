import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

const ACCESS_KEY = "NK1bD71Wv-4_rA1rV7_jYYMNlug4vyuhyBGjVz7MwII";

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchImages = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=12&page=${page}`
          );
          if (!response.ok) throw new Error("Failed to fetch images");

          const data = await response.json();

          if (page === 1) {
            setImages(data.results);
          } else {
            setImages((prevImages) => [...prevImages, ...data.results]); 
          }

          if (data.results.length === 0 && page === 1) {
            toast.error("Не знайдено зображень. Спробуйте інший запит.");
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchImages();
    }
  }, [query, page]); 

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    console.log(image);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);  
  };

  const handleSubmitSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1); 
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSubmitSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <div>
          <ImageGallery images={images} onSelect={handleImageSelect} />
          {loading && <Loader />}
          {images.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </div>
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        image={selectedImage}
      />
    </div>
  );
}

export default App;
