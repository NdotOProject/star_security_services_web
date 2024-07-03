import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Container, Row, Col } from "react-bootstrap";

import images from "../assets/images";
import httpClient from "../utils/HttpClient";

import "./ServiceArea.css";
import { Link } from "react-router-dom";

const styleClasses = Object.freeze({
  serviceArea: "service-area",
  titleContainer: "title-container",
  serviceContainer: "service-container",
  serviceCard: "service-card",
  serviceCardContent: "content",
  serviceName: "service-name",
  serviceDetail: "service-",
});

export default function ServiceArea() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const response = await httpClient.endpoints.services.list.get();
      setServices(response.data);
    };

    getServices();
  }, []);

  return (
    <div id="services" className={clsx(styleClasses.serviceArea)}>
      <div className={clsx(styleClasses.titleContainer)}>
        <span>Our Services</span>
      </div>
      <Container>
        <Row className={clsx(styleClasses.serviceContainer)}>
          {services.map((service) => {
            return (
              <Col
                as={Link}
                to={`/services/${service.id}`}
                className={clsx(styleClasses.serviceCard)}
                key={service.id}
                lg={3}
                md={4}
              >
                <div className={clsx(styleClasses.serviceCardContent)}>
                  <img src={images[service.id]} alt={service.name} />
                  <div className={clsx(styleClasses.serviceName)}>
                    {service.name}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
