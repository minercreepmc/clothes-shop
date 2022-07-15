import { trackWindowScroll } from 'react-lazy-load-image-component';
import { ImageContainer } from './lazy-image.styles';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImageContainer = ({
  className,
  onClick,
  scrollPosition,
  ...imageProps
}) => {
  const { src, alt } = imageProps;

  return (
    <ImageContainer
      alt={alt}
      src={src} // use normal <img> attributes as props
      placeholderSrc={src}
      className={className}
      scrollPosition={scrollPosition}
      effect="blur"
      width="100%"
      height="100%"
      onClick={onClick}
    />
  );
};

export default trackWindowScroll(LazyImageContainer);
