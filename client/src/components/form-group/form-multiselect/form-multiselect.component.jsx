import { Form } from 'react-bootstrap';
import { useController } from 'react-hook-form';
import Select from 'react-select';
import './form-multiselect.styles.scss';

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: '#181a1b' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#212425' : '#131516',
    };
  },
  multiValue: (styles) => ({ ...styles, backgroundColor: '#26292b' }),
  multiValueLabel: (styles) => ({ ...styles, color: '#c8c3bc' }),
  menuList: (styles) => ({ ...styles, backgroundColor: '#181a1b' }),
};

const FormMultiSelect = ({
  options,
  name,
  value,
  id,
  control,
  rules,
  defaultValue,
}) => {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Form.Group>
      <Form.Label htmlFor={id}>Sub Categories</Form.Label>
      <Select
        {...field}
        name={name}
        styles={colourStyles}
        className="h5 mb-5"
        closeMenuOnSelect={false}
        openMenuOnFocus={true}
        isMulti
        options={options}
        value={value}
        inputId={id}
      />
    </Form.Group>
  );
};

export default FormMultiSelect;
