import { Card, Spinner, Stack } from 'react-bootstrap';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import SpinnerContainer from 'components/reusables/spinner/spinner.component';

const CardLink = ({ isDeleting, name, handleDelete, slug, endpoint }) => {
  return (
    <Card className="sub-category-dark">
      <Card.Body className="d-flex justify-content-between ">
        <span>{name}</span>
        <Stack direction="horizontal" gap={2}>
          <SpinnerContainer isProcess={isDeleting} variant="danger" />

          <Link to={`${endpoint}`}>
            <FaEdit />
          </Link>
          <button onClick={() => handleDelete(slug)}>
            <FaRegTrashAlt color="#d9534f " />
          </button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CardLink;
