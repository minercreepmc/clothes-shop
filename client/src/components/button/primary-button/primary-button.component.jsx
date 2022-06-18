import { Button } from 'react-bootstrap';

import './primary-button.styles.scss';

const PrimaryButton = ({ children, ...otherProps }) => {
  return (
    <Button className="primary-button" {...otherProps}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
