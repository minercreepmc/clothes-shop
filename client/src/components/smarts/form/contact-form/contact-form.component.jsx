import { Form, Stack } from 'react-bootstrap';

import FormFloatingContainer from 'components/reusables/form-group/form-floating/form-floating.component';
import FormInput from 'components/reusables/form-group/form-input/form-input.component';
import SecondaryButton from 'components/reusables/button/secondary-button/secondary-button.component';

const ContactForm = ({ ...otherProps }) => {
  return (
    <Form {...otherProps}>
      <FormInput
        id="message"
        as="textarea"
        placeholder="Enter your message here..."
        label="Message"
      />

      <Stack>
        <SecondaryButton type="submit">Submit</SecondaryButton>
      </Stack>
    </Form>
  );
};

export default ContactForm;
