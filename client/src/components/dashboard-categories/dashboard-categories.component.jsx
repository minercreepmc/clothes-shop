import FormGroup from 'components/form-group/form-group.component';
import { Button, Card, Form } from 'react-bootstrap';

const DashboardCategories = () => {
  return (
    <div>
      <Form className="mb-5">
        <FormGroup
          name="category"
          type="text"
          label="Create category"
          placeholder="Create new category"
        />
        <Button variant="dark">Create</Button>
      </Form>

      <div>
        <h2>Categories available</h2>
        <Card>
          <Card.Body>Test</Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DashboardCategories;
