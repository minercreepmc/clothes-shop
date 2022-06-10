import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { setShowModalPassword } from 'store/modal/modal.action';
import { selectModalPasswordShow } from 'store/modal/modal.selector';

const ModalPassword = () => {
  const dispatch = useDispatch();

  const modalPasswordShow = useSelector(selectModalPasswordShow);
  const handleClose = () => dispatch(setShowModalPassword(!modalPasswordShow));

  return (
    <Modal show={modalPasswordShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Type in password to continue </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPassword;
