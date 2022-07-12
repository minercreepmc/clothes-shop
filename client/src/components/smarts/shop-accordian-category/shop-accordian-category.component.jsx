import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { httpGetSubCategories } from 'shares/hooks/requests/sub-categories/sub-categories.hook';
import ShopAccordianSubCategory from '../shop-accordian-sub-category/shop-accordian-sub-category.component';
import {
  Quantity,
  ExpandIcon,
  ChildrenList,
  List,
  ButtonLink,
} from './shop-accordian-category.styles';

import { fetchProductsAsync } from 'shares/store/products/products.action';

const ShopAccordianCategory = ({ category }) => {
  const [showChildrenList, setShowChildrenList] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  const dispatch = useDispatch();

  const { name, _id } = category;

  useEffect(() => {
    const getSubCategories = async () => {
      const subCategories = await httpGetSubCategories({ categoryId: _id });

      setSubCategories(subCategories);
    };

    getSubCategories();
  }, [_id]);

  const setProducts = () => {
    dispatch(fetchProductsAsync({ categoryId: category._id }));
  };

  return (
    <List hasChildren>
      <ButtonLink onClick={setProducts}>{name}</ButtonLink>
      <Quantity>{subCategories?.length}</Quantity>
      <ChildrenList isShow={showChildrenList}>
        {subCategories.map((subCategory) => (
          <ShopAccordianSubCategory
            key={subCategory._id}
            subCategory={subCategory}
          />
        ))}
      </ChildrenList>

      {subCategories.length > 0 && (
        <ExpandIcon onClick={() => setShowChildrenList(!showChildrenList)}>
          {showChildrenList ? '-' : '+'}
        </ExpandIcon>
      )}
    </List>
  );
};

export default ShopAccordianCategory;
