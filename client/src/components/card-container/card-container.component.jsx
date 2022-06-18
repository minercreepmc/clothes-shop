import { Card, Spinner, Stack } from 'react-bootstrap';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardContainer = ({ isDeleting, name, handleDelete, slug }) => {
  return (
    <Card className="sub-category-dark">
      <Card.Body className="d-flex justify-content-between ">
        <span>{name}</span>
        <Stack direction="horizontal" gap={2}>
          {isDeleting && (
            <Spinner animation="border" size="sm" variant="danger"></Spinner>
          )}

          <Link to={`/admin/dashboard/sub-categories/${slug}`}>
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

export default CardContainer;
