import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Form, Button } from "react-bootstrap";

import Authenticated from "../../../components/Authenticated";
import Table from "../../../components/table/Table";

import httpClient from "../../../utils/HttpClient";
import userService from "../../../utils/UserService";

import "./page.css";

const emptyClient = {
  id: undefined,
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  phoneNumber: {
    value: "",
    error: "",
  },
};

export default function Page() {
  const [client, setClient] = useState(emptyClient);
  const [clients, setClients] = useState([]);

  const role = userService.getUserRoleId();
  const endpoint = httpClient.endpoints.clients;

  useEffect(() => {
    const fetchClients = async () => {
      const response = await endpoint.list.get();

      setClients(response.data);
    };

    fetchClients();
  }, [endpoint]);

  return (
    <Authenticated>
      <div className="page_container">
        <div className="page_header">
          <span>Clients</span>
        </div>
        <div className="page_body">
          {role === "24722a9d-ad40-4324-a044-50825421cc6c" && (
            <div className="form_container">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={client.name.value}
                    onChange={(event) => {
                      const value = event.target.value;

                      let error = "";
                      if (value === "") {
                        error = "Name is required.";
                      }

                      setClient({
                        ...client,
                        name: { value, error },
                      });
                    }}
                  />
                  <span className={clsx("form_error")}>
                    {client.name.error}
                  </span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={client.email.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";
                      if (value === "") {
                        error = "Email is required.";
                      } else if (
                        !value.match(
                          /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        )
                      ) {
                        error = "Email is invalid.";
                      }

                      setClient({
                        ...client,
                        email: { value, error },
                      });
                    }}
                  />
                  <span className={clsx("form_error")}>
                    {client.email.error}
                  </span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={client.phoneNumber.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";

                      if (value === "") {
                        error = "Phone Number is required.";
                      } else if (
                        !value.match(
                          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                        )
                      ) {
                        error = "Phone Number format is invalid.";
                      }

                      setClient({
                        ...client,
                        phoneNumber: { value, error },
                      });
                    }}
                  />
                  <span className={clsx("form_error")}>
                    {client.phoneNumber.error}
                  </span>
                </Form.Group>
              </Form>
              <div className="btn_section">
                <div className="danger_range">
                  <Button
                    variant="danger"
                    disabled={client.id === undefined}
                    onClick={() => {
                      endpoint.single
                        .delete({
                          pathParams: {
                            id: client.id,
                          },
                        })
                        .then((response) => {
                          if (response.status === 204) {
                            setClients([
                              ...clients.filter((e) => e.id !== client.id),
                            ]);

                            setClient(emptyClient);
                          }
                        });
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <div className="safe_range">
                  <Button
                    disabled={client === emptyClient}
                    onClick={() => {
                      setClient(emptyClient);
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="success"
                    disabled={client === emptyClient}
                    onClick={() => {
                      if (
                        client.email.value !== "" &&
                        client.name.value !== "" &&
                        client.phoneNumber.value !== ""
                      ) {
                        if (client.id === undefined) {
                          endpoint.list
                            .post({
                              body: {
                                email: client.email.value,
                                name: client.name.value,
                                phoneNumber: client.phoneNumber.value,
                              },
                            })
                            .then((response) => {
                              if (response.status === 201) {
                                setClient(emptyClient);

                                setClients([...clients, response.data]);
                              }
                            });
                        } else {
                          endpoint.single
                            .put({
                              pathParams: {
                                id: client.id,
                              },
                              body: {
                                id: client.id,
                                email: client.email.value,
                                name: client.name.value,
                                phoneNumber: client.phoneNumber.value,
                              },
                            })
                            .then((response) => {
                              if (response.status === 204) {
                                setClients(
                                  [
                                    ...clients.filter(
                                      (e) => e.id !== client.id
                                    ),
                                    {
                                      id: client.id,
                                      email: client.email.value,
                                      name: client.name.value,
                                      phoneNumber: client.phoneNumber.value,
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

                                setClient(emptyClient);
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
            height="70vh"
            config={{
              id: "Id",
              name: "Name",
              email: "Email",
              phoneNumber: "Phone Number",
            }}
            content={clients.map((e) => ({
              ...e,
              key: e.id,
            }))}
            onRowSelect={(row) => {
              setClient({
                id: row.id,
                name: {
                  value: row.name,
                  error: "",
                },
                email: {
                  value: row.email,
                  error: "",
                },
                phoneNumber: {
                  value: row.phoneNumber,
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
