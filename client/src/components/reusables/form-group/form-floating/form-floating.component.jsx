import FormControl from '../form-control/form-control.component';

const { FormFloating } = require('./form-floating.styles');

const FormFloatingContainer = ({ id, label, ...controlProps }) => {
  return (
    <FormFloating controlId={id} label={label} className="mb-3">
      <FormControl {...controlProps} />
    </FormFloating>
  );
};

export default FormFloatingContainer;
