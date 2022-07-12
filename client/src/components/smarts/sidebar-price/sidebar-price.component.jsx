import { SidebarPriceContainer } from './sidebar-price.styles';
import Slider from 'components/reusables/slider/slider.component';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsSearchPrice } from 'shares/store/products/products.action';
import { selectProductsSearchPrice } from 'shares/store/products/products.selector';

const SidebarPrice = () => {
  const dispatch = useDispatch();

  const price = useSelector(selectProductsSearchPrice);

  const handleChange = (e) => {
    dispatch(setProductsSearchPrice(+e.target.value));
  };

  return (
    <SidebarPriceContainer>
      <Slider value={price} onChange={handleChange} />
    </SidebarPriceContainer>
  );
};

export default SidebarPrice;
