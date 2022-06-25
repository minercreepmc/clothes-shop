import { Form } from 'react-bootstrap';
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

const FormMultiSelect = ({ options, name, value, id, ...selectProps }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>Sub Categories</Form.Label>
      <Select
        name={name}
        styles={colourStyles}
        className="h5 mb-5"
        closeMenuOnSelect={false}
        openMenuOnFocus={true}
        isMulti
        options={options}
        value={value}
        {...selectProps}
      />
    </Form.Group>
  );
};

export default FormMultiSelect;
