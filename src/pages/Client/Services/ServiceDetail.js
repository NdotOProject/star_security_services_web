import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import clsx from "clsx";

import images from "../../../assets/images";
import routes from "../../../configurations/routes";
import Icons from "../../../components/icons/Icons";

import httpClient from "../../../utils/HttpClient";

import "./ServiceDetail.css";

const styleClasses = Object.freeze({
  pageContainer: "page-container",
  backButton: "back-button",
  serviceImage: "service-image",
  serviceName: "service-name",
  serviceDescription: "service-description",
});

export default function ServiceDetail() {
  const { serviceName } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    const serviceId = getServiceId(serviceName);
    const getService = async () => {
      const response = await httpClient.endpoints.services.detail.get({
        pathParams: { id: serviceId },
      });

      setService(response.data);
    };

    getService();
  }, [serviceName]);

  return (
    <Container className={clsx(styleClasses.pageContainer)}>
      <Link
        to={`${routes.client.home}`}
        className={clsx(styleClasses.backButton)}
      >
        <Icons.CircleChevronLeft size={20} />
        <span>Back</span>
      </Link>
      <Row>
        <Col md={6}>
          <div className={clsx(styleClasses.serviceName)}>{service.name}</div>
          <div className={clsx(styleClasses.serviceDescription)}>
            {service.description}
          </div>
        </Col>
        <Col md={6}>
          <img
            className={clsx(styleClasses.serviceImage)}
            src={images[service.id]}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}

function getServiceId(name) {
  switch (name) {
    case "manned-guarding":
      return "1a223d4e-060a-4073-bf3d-c0b03315f600";
    case "recruitment-and-training":
      return "5fc64104-0998-4ecb-97f2-285e472b94e6";
    case "electronic-security-systems":
      return "838d987a-c267-4b6d-87bd-5f658dcb9845";
    case "cash-services":
      return "95f4546f-85dc-4ed8-acc9-e830b766a180";
    default:
      return undefined;
  }
}
