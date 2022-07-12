import { Form } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

import { SearchContainer } from './search-widget.styles';

const SearchWidget = ({ value, onChange }) => {
  return (
    <SearchContainer>
      <Form action="#">
        <Form.Control
          type="search"
          placeholder="Search products..."
          value={value}
          onChange={onChange}
        ></Form.Control>
        <button type="button">
          <AiOutlineSearch />
        </button>
      </Form>
    </SearchContainer>
  );
};

export default SearchWidget;
