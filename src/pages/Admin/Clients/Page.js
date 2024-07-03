import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import Table from "../../../components/table/Table";
import Authenticated from "../Authenticated";

import httpClient from "../../../utils/HttpClient";

import "./Page.css";

export default function Page() {
  const [clients, setClients] = useState([]);
  const [openFormCreate, setOpenFormCreate] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [clientInfo, setClientInfo] = useState({
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
  });

  const role = localStorage.getItem("role");

  useEffect(() => {
    const getClients = async () => {
      const response = await httpClient.endpoints.clients.list.get();

      setClients(response.data);
    };

    getClients();
  }, []);

  return (
    <Authenticated>
      <div className={clsx("client_page--container")}>
        <div className={clsx("client_page--header")}>
          <span>Clients</span>
          {role === "24722a9d-ad40-4324-a044-50825421cc6c" && (
            <Button
              variant="success"
              onClick={() => {
                setOpenFormCreate(!openFormCreate);
                setClientInfo({
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
                });
              }}
            >
              Add New
            </Button>
          )}
        </div>
        {openFormCreate && (
          <div className={clsx("form_create_client")}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={clientInfo.name.value}
                  onChange={(event) => {
                    const value = event.target.value;

                    let error = "";
                    if (value === "") {
                      error = "Name is required.";
                    }

                    setClientInfo({
                      ...clientInfo,
                      name: { value, error },
                    });
                  }}
                />
                <span className={clsx("form_error")}>
                  {clientInfo.name.error}
                </span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={clientInfo.email.value}
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

                    setClientInfo({
                      ...clientInfo,
                      email: { value, error },
                    });
                  }}
                />
                <span className={clsx("form_error")}>
                  {clientInfo.email.error}
                </span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={clientInfo.phoneNumber.value}
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

                    setClientInfo({
                      ...clientInfo,
                      phoneNumber: { value, error },
                    });
                  }}
                />
                <span className={clsx("form_error")}>
                  {clientInfo.phoneNumber.error}
                </span>
              </Form.Group>
            </Form>
            <Button
              onClick={() => {
                if (
                  clientInfo.email.error === "" &&
                  clientInfo.name.error === "" &&
                  clientInfo.phoneNumber.error === ""
                ) {
                  const client = {
                    email: clientInfo.email.value,
                    name: clientInfo.name.value,
                    phoneNumber: clientInfo.phoneNumber.value,
                  };

                  const endpoint = httpClient.endpoints.clients;

                  if (clientInfo.id === undefined) {
                    endpoint.list.post({ body: client }).then((response) => {
                      if (response.status === 201) {
                        setClients([...clients, response.data]);
                        setClientInfo({
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
                        });
                      }
                    });
                  } else {
                    endpoint.single
                      .put({
                        pathParams: {
                          id: clientInfo.id,
                        },
                        body: {
                          id: clientInfo.id,
                          ...client,
                        },
                      })
                      .then((response) => {
                        if (response.status === 204) {
                          setClients(
                            [
                              ...clients.filter(
                                (client) => client.id !== clientInfo.id
                              ),
                              {
                                id: clientInfo.id,
                                ...client,
                              },
                            ].sort((c1, c2) => {
                              let id1 = c1.id;
                              let id2 = c2.id;

                              if (id1 > id2) {
                                return 1;
                              } else if (id2 > id1) {
                                return -1;
                              } else {
                                return 0;
                              }
                            })
                          );
                          setClientInfo({
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
                          });
                          setOpenFormCreate(false);
                        }
                      });
                  }
                }
              }}
            >
              Save
            </Button>
          </div>
        )}
        <Table
          config={{
            id: "Id",
            name: "Name",
            email: "Email",
            phoneNumber: "Phone Number",
            actions: "Actions",
          }}
          content={clients.map((client) => ({
            ...client,
            key: client.id,
            actions: (
              <div className="row_actions">
                <FontAwesomeIcon
                  icon={faPen}
                  className="edit_icon"
                  onClick={() => {
                    setOpenFormCreate(true);
                    setClientInfo({
                      id: client.id,
                      name: {
                        value: client.name,
                        error: "",
                      },
                      email: {
                        value: client.email,
                        error: "",
                      },
                      phoneNumber: {
                        value: client.phoneNumber,
                        error: "",
                      },
                    });
                  }}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete_icon"
                  onClick={() => {
                    setClientInfo({
                      id: client.id,
                      name: {
                        value: client.name,
                        error: "",
                      },
                      email: {
                        value: client.email,
                        error: "",
                      },
                      phoneNumber: {
                        value: client.phoneNumber,
                        error: "",
                      },
                    });
                    setOpenDeleteAlert(true);
                    setOpenFormCreate(false);
                  }}
                />
              </div>
            ),
          }))}
        />
        {openDeleteAlert && (
          <div className="delete_alert">
            <h3 className="title">Do you want to delete this client?</h3>
            <div className="info_section">
              <span>Id: {clientInfo.id}</span>
              <span>Name: {clientInfo.name.value}</span>
              <span>Email: {clientInfo.email.value}</span>
              <span>Phone Number: {clientInfo.phoneNumber.value}</span>
            </div>
            <div className="btn_section">
              <Button
                variant="danger"
                onClick={() => {
                  httpClient.endpoints.clients.single
                    .delete({
                      pathParams: {
                        id: clientInfo.id,
                      },
                    })
                    .then((resp) => {
                      if (resp.status === 204) {
                        setClients([
                          ...clients.filter(
                            (client) => client.id !== clientInfo.id
                          ),
                        ]);
                        setClientInfo({
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
                        });

                        setOpenDeleteAlert(false);
                      }
                    });
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  setClientInfo({
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
                  });
                  setOpenDeleteAlert(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </Authenticated>
  );
}
