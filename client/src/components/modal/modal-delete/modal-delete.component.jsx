import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setShowModalDelete } from 'shares/store/dashboard/dashboard.action';

import { selectModalDeleteShow } from 'shares/store/dashboard/dashboard.selector';

const ModalDelete = () => {
  const dispatch = useDispatch();

  const modalDeleteShow = useSelector(selectModalDeleteShow);

  const handleHideModalDelete = () => dispatch(setShowModalDelete(false));

  return (
    <Modal
      size="sm"
      show={modalDeleteShow}
      onHide={handleHideModalDelete}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">Small Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  );
};

export default ModalDelete;
