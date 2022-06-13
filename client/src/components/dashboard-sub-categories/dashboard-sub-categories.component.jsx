import FormGroup from 'components/form-group/form-group.component';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectCategories } from 'shares/store/shop/shop.selector';

const subCategoryTemplate = {
  name: '',
};

const DashboardSubCategory = () => {
  const categories = useSelector(selectCategories);

  const [subCategory, setSubCategory] = useState(subCategoryTemplate);

  const { name } = subCategory;

  const handleChange = (e) => {
    const input = e.target;
    setSubCategory({ name: input.value });
  };
  return (
    <div>
      <h1 className="fw-bold">Create sub category</h1>
      <Form className="mb-5">
        <div className="mb-3">
          <Form.Label htmlFor="select-sub">Choose a category</Form.Label>
          <Form.Select id="select-sub" aria-label="Default select example">
            {categories.map((category) => (
              <option value={category.slug}>{category.name}</option>
            ))}
          </Form.Select>
        </div>

        <FormGroup
          name="sub-category"
          type="text"
          label="Create sub category"
          placeholder="Create sub new category"
          value={name}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default DashboardSubCategory;
