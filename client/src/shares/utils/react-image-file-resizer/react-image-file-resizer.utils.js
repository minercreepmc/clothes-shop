import Resizer from 'react-image-file-resizer';

export const resizeImages = async (images) => {
  const resizedImages = [];
  const resizePromises = images.map((image) =>
    Resizer.imageFileResizer(
      image,
      720,
      720,
      'WEBP',
      100,
      0,
      async (uri) => {
        resizedImages.push(uri);
      },
      'base64',
    ),
  );
  await Promise.all(resizePromises);

  return resizedImages;
};
