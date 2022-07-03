import {
  ServiceIconContainer,
  ServiceBody,
  ServiceTitle,
} from './service-container.styles';

const ServiceContainer = ({ service }) => {
  const { icon, title, body } = service;
  return (
    <div className="mt-5">
      <ServiceIconContainer className="fs-1 mb-2">{icon}</ServiceIconContainer>
      <ServiceTitle className="h4 mb-2">{title}</ServiceTitle>
      <ServiceBody className="text-muted mb-0">{body}</ServiceBody>
    </div>
  );
};

export default ServiceContainer;
