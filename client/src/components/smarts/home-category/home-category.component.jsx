import { Image } from 'react-bootstrap';

import {
  Category,
  CategoryCaption,
  CategoryName,
  CategoryThumbnail,
} from './home-category.styles';

const HomeCategory = ({ category }) => {
  const { name, thumbnail } = category;

  return (
    <Category>
      <CategoryThumbnail src={thumbnail} alt="Category Thumbnail" />
      <CategoryCaption>
        <CategoryName>{name}</CategoryName>
      </CategoryCaption>
    </Category>
  );
};

export default HomeCategory;
