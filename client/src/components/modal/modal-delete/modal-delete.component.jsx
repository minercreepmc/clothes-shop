import { useContext } from 'react';
import { Modal } from 'react-bootstrap';

import { DashboardContext } from 'shares/contexts/dashboard.context';

const ModalDelete = () => {
  const { isModalDeleteShow, setIsModalDeleteShow } =
    useContext(DashboardContext);

  const handleHideModalDelete = () => setIsModalDeleteShow(false);

  return (
    <Modal
      size="sm"
      show={isModalDeleteShow}
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
