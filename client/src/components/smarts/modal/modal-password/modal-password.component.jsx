import { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { DashboardContext } from 'shares/contexts/dashboard.context';

import { reAuthenticateWithPassword } from 'shares/utils/firebase/firebase.utils';

import 'components/smarts/modal/modal.styles.scss';
import PrimaryButton from 'components/reusables/button/primary-button/primary-button.component';

const ModalPassword = () => {
  const {
    isModalPasswordShow,
    setIsModalPasswordShow,
    setIsInformationChanging,
  } = useContext(DashboardContext);
  const handleClose = () => setIsModalPasswordShow(false);

  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const input = e.target;

    setPassword(input.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      toast.error('Please enter password');
      return;
    }

    try {
      await reAuthenticateWithPassword(password);

      setIsModalPasswordShow(false);
      setIsInformationChanging(true);
      toast.success('Password entered successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal
      show={isModalPasswordShow}
      onHide={handleClose}
      className="modal-dark"
    >
      <Modal.Header closeButton>
        <Modal.Title>Type in password to continue </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onChange={handleChange} onSubmit={handleSubmit} id="modal-form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <PrimaryButton variant="dark" type="submit" form="modal-form">
          Submit
        </PrimaryButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPassword;
