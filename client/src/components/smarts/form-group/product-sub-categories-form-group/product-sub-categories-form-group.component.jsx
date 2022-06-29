import { useEffect, useState } from 'react';

import FormMultiSelect from 'components/reusables/form-group/form-multiselect/form-multiselect.component';

const ProductSubCategoriesFormGroup = ({
  product,
  setProduct,
  value,
  options,
}) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [mappedOptions, setMappedOptions] = useState([]);

  const handleChange = (data) => {
    const mappedData = data.map((piece) => piece.value);
    setProduct({ ...product, subCategoriesId: mappedData });
  };

  useEffect(() => {
    const loadSelectedSubCategory = async () => {
      const subCategories = value.map((item) => ({
        value: item._id,
        label: item.name,
      }));

      setSelectedSubCategory(subCategories);
    };
    loadSelectedSubCategory();
  }, [value]);

  useEffect(() => {
    setMappedOptions(
      options?.map((option) => ({ value: option._id, label: option.name })),
    );
  }, [options]);

  return (
    <FormMultiSelect
      name="subCategoriesId"
      id="sub-categories"
      value={selectedSubCategory}
      onChange={handleChange}
      options={mappedOptions}
    />
  );
};

export default ProductSubCategoriesFormGroup;
