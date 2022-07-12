import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const Slider = ({ value, onChange }) => {
  return (
    <RangeSlider
      min={0}
      max={1000}
      step={1}
      value={value}
      onChange={onChange}
      variant="secondary"
      tooltipLabel={(currentValue) => `${currentValue}$`}
      tooltip="on"
    />
  );
};

export default Slider;
