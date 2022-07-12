import { SingleSidebarWidgetListCategories } from './shop-accordian.styles';

import ShopAccordianCategory from '../shop-accordian-category/shop-accordian-category.component';
import { useSelector } from 'react-redux';
import { selectCategories } from 'shares/store/categories/categories.selector';

const ShopAccordian = () => {
  const categories = useSelector(selectCategories);

  return (
    <SingleSidebarWidgetListCategories hasChildren>
      {categories.map((category) => (
        <ShopAccordianCategory key={category._id} category={category} />
      ))}
    </SingleSidebarWidgetListCategories>
  );
};

export default ShopAccordian;
