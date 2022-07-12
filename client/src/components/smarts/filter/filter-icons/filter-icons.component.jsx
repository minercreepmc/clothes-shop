import FilterDropdown from 'components/smarts/filter/filter-dropdown/filter-dropdown.component';
import {
  FilterIcons,
  GridIcons,
  IconLink,
  AdvanceFilterIcons,
} from './filter-icons.styles';
import {
  BsGripHorizontal,
  BsFillGrid3X3GapFill,
  BsFillGridFill,
} from 'react-icons/bs';
import { IoMdFunnel } from 'react-icons/io';
import { TbLayoutList } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { setShowColumn } from 'shares/store/shop/shop.action';

const FilterIconsContainer = () => {
  const dispatch = useDispatch();

  const handleShowMode = (column) => dispatch(setShowColumn(column));
  return (
    <FilterIcons>
      <FilterDropdown />
      <GridIcons>
        <IconLink onClick={() => handleShowMode(4)}>
          <BsFillGrid3X3GapFill />
        </IconLink>

        <IconLink onClick={() => handleShowMode(3)}>
          <BsFillGridFill />
        </IconLink>

        <IconLink onClick={() => handleShowMode(1)}>
          <TbLayoutList />
        </IconLink>
      </GridIcons>
      <AdvanceFilterIcons>
        <IoMdFunnel />
        Filters
      </AdvanceFilterIcons>
    </FilterIcons>
  );
};

// <IconLink onClick={() => handleShowMode(5)}>
//   <BsGripHorizontal />
// </IconLink>

export default FilterIconsContainer;
