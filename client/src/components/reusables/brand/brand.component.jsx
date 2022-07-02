import { Link } from 'react-router-dom';
import { Brand } from './brand.styles';

const BrandContainer = ({ children }) => {
  return (
    <Brand as={Link} to="/">
      {children}
    </Brand>
  );
};

export default BrandContainer;
