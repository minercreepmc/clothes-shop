import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './images-gallery.styles.scss';

const ImagesGalleryContainer = ({ images }) => {
  return <ImageGallery items={images} />;
};

export default ImagesGalleryContainer;
