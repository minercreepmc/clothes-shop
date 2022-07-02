import { SecondaryButton } from './secondary-button.styles';

const SecondaryButtonContainer = ({ children, ...otherProps }) => {
  return (
    <SecondaryButton className="secondary-button" {...otherProps}>
      {children}
    </SecondaryButton>
  );
};

export default SecondaryButtonContainer;
