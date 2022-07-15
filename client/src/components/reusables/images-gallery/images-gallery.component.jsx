import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImagesGalleryContainer = ({ images }) => {
  return (
    <ImageGallery items={images} thumbnailsHeight={500} thumbnailWidth={150} />
  );
};

export default ImagesGalleryContainer;
