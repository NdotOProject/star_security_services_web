import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import Icons from "../../../components/icons/Icons";

import routes from "../../../configurations/routes";
import images from "../../../assets/images";
import httpClient from "../../../utils/HttpClient";

import "./page.css";

export default function Page() {
  const { id } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    const fetchService = async () => {
      const response = await httpClient.endpoints.services.single.get({
        pathParams: { id: id },
      });

      setService(response.data);
    };

    fetchService();
  }, [id]);

  return (
    <Container className={"page-container"}>
      <Link to={`${routes.client.home}`} className={"back-button"}>
        <Icons.CircleChevronLeft size={20} />
        <span>Back</span>
      </Link>
      <Row>
        <Col md={6}>
          <div className={"service-name"}>{service.name}</div>
          <div className={"service-description"}>{service.description}</div>
        </Col>
        <Col md={6}>
          <img className={"service-image"} src={images[service.id]} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
