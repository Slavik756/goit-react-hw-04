import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images, onSelect }) {
    return (
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={onSelect} />
          </li>
        ))}
      </ul>
    );
  }

  export default ImageGallery;