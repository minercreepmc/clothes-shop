import { Modal, Button } from 'react-bootstrap';
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
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPassword;
