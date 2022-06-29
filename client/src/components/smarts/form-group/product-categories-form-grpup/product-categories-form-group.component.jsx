import FormSelect from 'components/reusables/form-group/form-select/form-select.component';
import { httpGetCategory } from 'shares/hooks/requests/categories/category-requests.hook';

const ProductCategoriesFormGroup = ({ handleChange, value, options }) => {
  return (
    <FormSelect
      label="Categories"
      name="categoryId"
      id="category"
      value={value}
      onChange={handleChange}
    >
      <option value="">--Select category--</option>
      {options?.map((category) => (
        <option value={category._id} key={category._id}>
          {category.name}
        </option>
      ))}
    </FormSelect>
  );
};

export default ProductCategoriesFormGroup;
