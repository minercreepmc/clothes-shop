import { Form } from 'react-bootstrap';

const SearchBar = ({ handleChange }) => {
  return (
    <Form.Control
      className="mb-4"
      placeholder="Find category"
      aria-label="Find category"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
