import Lightbox from 'react-image-lightbox';

const LightBoxContainer = ({
  images,
  photoIndex,
  setPhotoIndex,
  setIsOpen,
}) => {
  return (
    <Lightbox
      mainSrc={images[photoIndex].secure_url}
      nextSrc={images[(photoIndex + 1) % images.length].secure_url}
      prevSrc={
        images[(photoIndex + images.length - 1) % images.length].secure_url
      }
      onCloseRequest={() => setIsOpen(false)}
      onMovePrevRequest={() =>
        setPhotoIndex((photoIndex + images.length - 1) % images.length)
      }
      onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
      onImageLoad={() => {
        window.dispatchEvent(new Event('resize'));
      }}
    />
  );
};

export default LightBoxContainer;
