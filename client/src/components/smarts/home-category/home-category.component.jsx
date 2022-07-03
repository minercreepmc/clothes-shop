import { Image } from 'react-bootstrap';

import {
  Category,
  CategoryCaption,
  CategoryName,
} from './home-category.styles';

const HomeCategory = ({ category }) => {
  const { name, thumbnail } = category;

  return (
    <Category>
      <Image fluid src={thumbnail} alt="..." />
      <CategoryCaption>
        <CategoryName>{name}</CategoryName>
      </CategoryCaption>
    </Category>
  );
};

export default HomeCategory;
