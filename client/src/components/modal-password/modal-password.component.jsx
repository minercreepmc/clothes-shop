import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { setShowModalPassword } from 'store/modal/modal.action';
import { selectModalPasswordShow } from 'store/modal/modal.selector';
import { reAuthenticateWithPassword } from 'utils/firebase/firebase.utils';

const ModalPassword = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setShowModalPassword(!modalPasswordShow));

  const modalPasswordShow = useSelector(selectModalPasswordShow);

  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const input = e.target;

    setPassword(input.value);
  };

  const handleSubmit = async () => {
    try {
      console.log(password);
      await reAuthenticateWithPassword(password);

      dispatch(setShowModalPassword(!modalPasswordShow));
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <Modal show={modalPasswordShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Type in password to continue </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onChange={handleChange}>
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
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPassword;
