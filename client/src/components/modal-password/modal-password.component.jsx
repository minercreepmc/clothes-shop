import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  setIsChanging,
  setShowModalPassword,
} from 'shares/store/dashboard/dashboard.action';
import { selectModalPasswordShow } from 'shares/store/dashboard/dashboard.selector';
import { reAuthenticateWithPassword } from 'shares/utils/firebase/firebase.utils';

const ModalPassword = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setShowModalPassword(!modalPasswordShow));

  const modalPasswordShow = useSelector(selectModalPasswordShow);

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
      const { user } = await reAuthenticateWithPassword(password);

      dispatch(setShowModalPassword(!modalPasswordShow));
      dispatch(setIsChanging(true));
      toast.success('Password entered successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal show={modalPasswordShow} onHide={handleClose}>
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
        <Button variant="dark" type="submit" form="modal-form">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPassword;
