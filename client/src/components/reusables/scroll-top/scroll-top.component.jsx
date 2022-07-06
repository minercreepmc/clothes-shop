import { AiOutlineArrowUp } from 'react-icons/ai';
import { ScrollTopButton } from './scroll-top.styles';

const ScrollTopContainer = () => {
  return (
    <ScrollTopButton
      text="Back to Top"
      distance={100}
      breakpoint={768}
      className="scroll-your-role"
      speed={1000}
      target={75}
      icon={<AiOutlineArrowUp />}
    />
  );
};

export default ScrollTopContainer;
