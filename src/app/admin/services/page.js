import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

import Authenticated from "../../../components/Authenticated";
import Table from "../../../components/table/Table";

import httpClient from "../../../utils/HttpClient";
import userService from "../../../utils/UserService";

import "./page.css";

const emptyService = {
  id: undefined,
  name: {
    value: "",
    error: "",
  },
  description: {
    value: "",
    error: "",
  },
};

export default function Page() {
  const [service, setService] = useState(emptyService);
  const [services, setServices] = useState([]);

  const role = userService.getUserRoleId();
  const endpoint = httpClient.endpoints.services;

  useEffect(() => {
    const fetchServices = async () => {
      const response = await endpoint.list.get();

      setServices(response.data);
    };

    fetchServices();
  }, [endpoint]);

  return (
    <Authenticated>
      <div className="page_container">
        <div className="page_header">
          <span>Services</span>
        </div>
        <div className="page_body">
          {role === "24722a9d-ad40-4324-a044-50825421cc6c" && (
            <div className="form_container">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={service.name.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";
                      if (value === "") {
                        error = "Name is required.";
                      }

                      setService({
                        ...service,
                        name: { value, error },
                      });
                    }}
                  />
                  <span className="form_error">{service.name.error}</span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={service.description.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";

                      if (value === "") {
                        error = "Description is required.";
                      }

                      setService({
                        ...service,
                        description: { value, error },
                      });
                    }}
                  />
                  <span className="form_error">
                    {service.description.error}
                  </span>
                </Form.Group>
              </Form>
              <div className="btn_section">
                <div className="danger_range">
                  <Button
                    variant="danger"
                    disabled={service.id === undefined}
                    onClick={() => {
                      endpoint.single
                        .delete({
                          pathParams: {
                            id: service.id,
                          },
                        })
                        .then((response) => {
                          if (response.status === 204) {
                            setServices([
                              ...services.filter((e) => e.id !== service.id),
                            ]);

                            setService(emptyService);
                          }
                        });
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <div className="safe_range">
                  <Button
                    disabled={service === emptyService}
                    onClick={() => {
                      setService(emptyService);
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="success"
                    disabled={service === emptyService}
                    onClick={() => {
                      if (
                        service.name.error === "" &&
                        service.description.error === ""
                      ) {
                        if (service.id === undefined) {
                          endpoint.list
                            .post({
                              body: {
                                name: service.name.value,
                                description: service.description.value,
                              },
                            })
                            .then((response) => {
                              if (response.status === 201) {
                                setService(emptyService);

                                setServices([...services, response.data]);
                              }
                            });
                        } else {
                          endpoint.single
                            .put({
                              pathParams: {
                                id: service.id,
                              },
                              body: {
                                id: service.id,
                                name: service.name.value,
                                description: service.description.value,
                              },
                            })
                            .then((response) => {
                              if (response.status === 204) {
                                setServices(
                                  [
                                    ...services.filter(
                                      (e) => e.id !== service.id
                                    ),
                                    {
                                      id: service.id,
                                      name: service.name.value,
                                      description: service.description.value,
                                    },
                                  ].sort((e1, e2) => {
                                    let id1 = e1.id;
                                    let id2 = e2.id;

                                    if (id1 > id2) {
                                      return 1;
                                    } else if (id2 > id1) {
                                      return -1;
                                    } else {
                                      return 0;
                                    }
                                  })
                                );

                                setService(emptyService);
                              }
                            });
                        }
                      }
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          )}
          <Table
            config={{
              id: "Id",
              name: "Name",
              description: "Description",
            }}
            content={services.map((e) => ({
              ...e,
              key: e.id,
            }))}
            onRowSelect={(row) => {
              setService({
                id: row.id,
                name: {
                  value: row.name,
                  error: "",
                },
                description: {
                  value: row.description,
                  error: "",
                },
              });
            }}
          />
        </div>
      </div>
    </Authenticated>
  );
}
