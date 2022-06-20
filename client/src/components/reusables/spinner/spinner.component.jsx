import { Spinner } from 'react-bootstrap';

const SpinnerContainer = ({ isProcess, variant, ...otherProps }) => {
  return (
    isProcess && (
      <Spinner
        animation="border"
        size="sm"
        variant={variant}
        {...otherProps}
      ></Spinner>
    )
  );
};

export default SpinnerContainer;
