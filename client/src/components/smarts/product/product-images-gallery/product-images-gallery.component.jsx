import ImagesGallery from 'components/reusables/images-gallery/images-gallery.component';
import { useEffect, useState } from 'react';
import { httpGetImage } from 'shares/hooks/requests/images/images.hook';
import {
  mapToArray,
  recursiveObjectPromiseAll,
} from 'shares/utils/logics/logics.utils';
const ProductImageGallery = ({ product, ...otherProps }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      const productImages = product?.images;

      const getImages = productImages.map((image) => {
        return {
          original: image.secure_url,
          thumbnail: httpGetImage({
            imageId: image.public_id,
            query: { width: 150, height: 200 },
          }),
        };
      });

      const imagesMap = await recursiveObjectPromiseAll(getImages);
      const imagesArray = mapToArray(imagesMap);
      setImages(imagesArray);
    };

    if (product) {
      fetchImage();
    }
  }, [product]);

  return images ? (
    <ImagesGallery images={images} {...otherProps} />
  ) : (
    <span>Loading...</span>
  );
};

export default ProductImageGallery;
