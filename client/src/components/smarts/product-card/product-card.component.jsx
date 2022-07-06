import { useState } from 'react';
import { FaShoppingCart, FaHeart, FaExpandArrowsAlt } from 'react-icons/fa';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import {
  Part1,
  SingleProduct,
  IconButtonGroup,
  IconContainer,
  IconButton,
  Part2,
  ProductTitle,
  ProductOldPrice,
  ProductPrice,
  New,
  BackgroundImage,
} from './products-card.styles';

const ProductCard = ({ product, isNew }) => {
  const { title, price, sale: oldPrice, images } = product;
  const thumpnail = images[0].secure_url;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <SingleProduct>
      <Part1 imageUrl={thumpnail}>
        {isNew && <New>New</New>}
        <BackgroundImage src={thumpnail} alt="Thumpnail" />
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].secure_url}
            nextSrc={images[(photoIndex + 1) % images.length].secure_url}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length]
                .secure_url
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
            onImageLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
          />
        )}

        <IconButtonGroup>
          <IconContainer>
            <IconButton onClick={() => setIsOpen(true)}>
              <FaExpandArrowsAlt />
            </IconButton>
          </IconContainer>

          <IconContainer>
            <IconButton>
              <FaHeart />
            </IconButton>
          </IconContainer>

          <IconContainer>
            <IconButton>
              <FaShoppingCart />
            </IconButton>
          </IconContainer>
        </IconButtonGroup>
      </Part1>
      <Part2>
        <ProductTitle>{title}</ProductTitle>
        {oldPrice && <ProductOldPrice>{oldPrice}</ProductOldPrice>}
        <ProductPrice>{price}$</ProductPrice>
      </Part2>
    </SingleProduct>
  );
};

export default ProductCard;
