import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const FormMultiSelect = ({ options, onChange, name }) => {
  return (
    <Select
      name={name}
      className="h5 mb-5"
      closeMenuOnSelect={false}
      isMulti
      options={options}
      onChange={onChange}
    />
  );
};

export default FormMultiSelect;
