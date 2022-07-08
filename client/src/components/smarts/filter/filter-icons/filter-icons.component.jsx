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

const FilterIconsContainer = () => {
  return (
    <FilterIcons>
      <FilterDropdown />
      <GridIcons>
        <IconLink>
          <BsGripHorizontal />
        </IconLink>

        <IconLink>
          <BsFillGrid3X3GapFill />
        </IconLink>

        <IconLink>
          <BsFillGridFill />
        </IconLink>

        <IconLink>
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

export default FilterIconsContainer;
