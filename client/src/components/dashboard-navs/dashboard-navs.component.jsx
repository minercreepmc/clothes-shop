import { Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardNavs = ({ list }) => {
  return (
    <>
      <Nav className="d-none d-md-block">
        {list.map((item) => (
          <Nav.Link className="text-dark" as={Link} to={item.route}>
            {item.name}
          </Nav.Link>
        ))}
      </Nav>

      <DropdownButton
        align="start"
        title="Dashboard"
        id="dropdown-menu-align-start"
        variant="dark"
        className="mb-5 d-flex d-md-none"
      >
        <Dropdown.Item as={Link} to="">
          Informations
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="wishlist">
          Wishlist
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default DashboardNavs;
