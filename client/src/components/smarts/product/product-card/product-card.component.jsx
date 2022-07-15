import LightBoxContainer from 'components/reusables/lightbox/lightbox.component';
import { useState } from 'react';
import { FaShoppingCart, FaHeart, FaExpandArrowsAlt } from 'react-icons/fa';
import 'react-image-lightbox/style.css';
import { useNavigate } from 'react-router-dom';

import {
  Part1,
  SingleProduct,
  IconButtonGroup,
  IconContainer,
  IconButton,
  Part2,
  ProductTitle,
  ProductMainPrice,
  ProductDiscountedPrice,
  SaleTag,
  ProductImage,
  FloatingBadges,
  ProductPriceContainer,
} from './products-card.styles';

const ProductCard = ({ product, isNew }) => {
  const { title, price, images, discount, slug } = product;
  const thumpnail = images[0].secure_url;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const navigate = useNavigate();

  const discoutedPrice = price - price * (discount / 100);

  return (
    <SingleProduct>
      <Part1 imageUrl={thumpnail}>
        <FloatingBadges>
          {discount && <SaleTag>-{discount}%</SaleTag>}
        </FloatingBadges>
        <ProductImage
          src={thumpnail}
          alt="product thumpnail"
          onClick={() => navigate(slug)}
        />
        {isOpen && (
          <LightBoxContainer
            images={images}
            photoIndex={photoIndex}
            setPhotoIndex={setPhotoIndex}
            setIsOpen={setIsOpen}
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

        <ProductPriceContainer>
          {discount && <ProductMainPrice> {price}$</ProductMainPrice>}
          <ProductDiscountedPrice>
            {discount ? discoutedPrice.toFixed(2) : price}$
          </ProductDiscountedPrice>
        </ProductPriceContainer>
      </Part2>
    </SingleProduct>
  );
};

export default ProductCard;
