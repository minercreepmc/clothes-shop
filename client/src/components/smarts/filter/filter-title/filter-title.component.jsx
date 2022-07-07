import {
  FilterTitle,
  ProductFilterMenu,
  ProductFilter,
} from './filter-title.styles';

const FilterTitleContainer = () => {
  return (
    <FilterTitle>
      <ProductFilterMenu>
        <ProductFilter active>All</ProductFilter>
        <ProductFilter>hot products</ProductFilter>
        <ProductFilter>new products</ProductFilter>
        <ProductFilter>sale products</ProductFilter>
      </ProductFilterMenu>
    </FilterTitle>
  );
};

export default FilterTitleContainer;
