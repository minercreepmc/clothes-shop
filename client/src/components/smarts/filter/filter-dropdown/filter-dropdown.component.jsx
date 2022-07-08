import DropdownSelect from 'components/reusables/dropdown-select/dropdown-select.component';
import { FilterDropdown } from './filter-dropdown.styles';

const filterOptions = [
  { value: 'default', label: 'Default Sorting' },
  { value: 'popularity', label: 'Sort by popularity' },
  { value: 'rating', label: 'Sort by average rating' },
  { value: 'lastest', label: 'Sort by lastest' },
  { value: 'lowtohigh', label: 'Sort by price: low to high' },
  { value: 'hightolow', label: 'Sort by price: high to low' },
];

const FilterDropdownContainer = () => {
  return (
    <FilterDropdown>
      <DropdownSelect options={filterOptions} />
    </FilterDropdown>
  );
};

export default FilterDropdownContainer;
