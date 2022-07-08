import Select from 'react-select';

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: '#181a1b',
    borderColor: '#3e4446',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#212425' : '#131516',
    };
  },
  menuList: (styles) => ({
    ...styles,
    backgroundColor: '#181a1b',
    width: '300px',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: '#d1cdc7',
  }),
};

const DropdownSelect = ({ options }) => {
  return (
    <Select defaultValue={options[0]} options={options} styles={colourStyles} />
  );
};

export default DropdownSelect;
