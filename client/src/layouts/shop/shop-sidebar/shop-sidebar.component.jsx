import { useDispatch, useSelector } from 'react-redux';

import SearchWidget from 'components/reusables/search-widget/search-widget.component';
import ListCategories from 'components/smarts/shop-accordian/shop-accordian.component';
import SidebarPrice from 'components/smarts/sidebar-price/sidebar-price.component';
import {
  ShopSidebar,
  SingleSidebarWidget,
  SingleSidebarWidgetTitle,
} from './shop-sidebar.styles';
import { setProductsSearchText } from 'shares/store/products/products.action';
import { selectProductsSearchText } from 'shares/store/products/products.selector';

const ShopSidebarContainer = ({ ...otherProps }) => {
  const dispatch = useDispatch();

  const searchText = useSelector(selectProductsSearchText);

  const handleChange = (e) => {
    dispatch(setProductsSearchText(e.target.value));
  };

  return (
    <ShopSidebar {...otherProps}>
      <SingleSidebarWidget className="mb-40">
        <SearchWidget value={searchText} onChange={handleChange} />
      </SingleSidebarWidget>

      <SingleSidebarWidget className="mb-40">
        <SingleSidebarWidgetTitle>Categories</SingleSidebarWidgetTitle>
        <ListCategories />
      </SingleSidebarWidget>

      <SingleSidebarWidget className="mb-40">
        <SingleSidebarWidgetTitle>Filters</SingleSidebarWidgetTitle>
        <SidebarPrice />
      </SingleSidebarWidget>
    </ShopSidebar>
  );
};

export default ShopSidebarContainer;
