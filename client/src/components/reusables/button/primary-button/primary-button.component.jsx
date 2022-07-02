import { PrimaryButton } from './primary.styles';

const PrimaryButtonContainer = ({ children, ...otherProps }) => {
  return <PrimaryButton {...otherProps}>{children}</PrimaryButton>;
};

export default PrimaryButtonContainer;
