import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { setShow } from 'store/modal/modal.action';
import { selectModalShow } from 'store/modal/modal.selector';

const ModalContainer = () => {
  const dispatch = useDispatch();

  const modalShow = useSelector(selectModalShow);
  console.log(modalShow);
  const handleClose = () => dispatch(setShow(!modalShow));

  return (
    <Modal show={modalShow} onHide={handleClose}>
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

export default ModalContainer;
