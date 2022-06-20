import { Form } from 'react-bootstrap';

import './search-bar.styles.scss';

const SearchBar = ({ handleChange }) => {
  return (
    <Form.Control
      className="mb-4 search-bar-dark"
      placeholder="Find category"
      aria-label="Find category"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
