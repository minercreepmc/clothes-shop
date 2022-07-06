import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { BiPhone, BiArrowFromLeft } from 'react-icons/bi';

import { selectCurrentUser } from 'shares/store/user/user.selector';
import ContactForm from 'components/smarts/form/contact-form/contact-form.component';
import SecondaryButton from 'components/reusables/button/secondary-button/secondary-button.component';

import { HomeContact } from './home-contact.styles';

const HomeContactContainer = ({ ...otherProps }) => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  return (
    <HomeContact className="page-section" {...otherProps}>
      <Container className="px-4 px-lg-5">
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <Col lg={8} xl={6} className="text-center">
            <h2 className="mt-0">Let's get in touch</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
              Have a problem? Or you have a question? Send us a messages and we
              will get back to you as soon as possible!
            </p>
          </Col>
        </Row>

        <Row className="gx-4 gx-lg-5 justify-content-center mb-5">
          <Col lg={6}>
            {user ? (
              <ContactForm />
            ) : (
              <Stack>
                <SecondaryButton onClick={() => navigate('/auth')}>
                  Login to contact <BiArrowFromLeft className="fs-3" />
                </SecondaryButton>
              </Stack>
            )}
          </Col>
        </Row>
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <Col lg={4} className="text-center mb-5 mb-lg-0">
            <BiPhone className="text-muted fs-2 mb-3" />
            <div>+1 (555) 123-4567</div>
          </Col>
        </Row>
      </Container>
    </HomeContact>
  );
};

export default HomeContactContainer;
