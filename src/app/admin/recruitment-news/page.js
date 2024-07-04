import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

import Authenticated from "../../../components/Authenticated";
import Table from "../../../components/table/Table";

import httpClient from "../../../utils/HttpClient";
import userService from "../../../utils/UserService";

import "./page.css";

const emptyRecruitmentNews = {
  id: undefined,
  description: {
    value: "",
    error: "",
  },
  managerId: {
    value: "",
    error: "",
  },
  title: {
    value: "",
    error: "",
  },
  vacancies: {
    value: "",
    error: "",
  },
};

export default function Page() {
  const [recruitmentNews, setRecruitmentNews] = useState(emptyRecruitmentNews);
  const [recruitmentNewsList, setRecruitmentNewsList] = useState([]);
  const [employees, setEmployees] = useState([]);

  const role = userService.getUserRoleId();
  const endpoint = httpClient.endpoints.recruitments;

  useEffect(() => {
    const fetchRecruitments = async () => {
      const response = await endpoint.list.get();

      setRecruitmentNewsList(response.data);
    };

    const fetchEmployees = async () => {
      const response = await httpClient.endpoints.employees.list.get();

      setEmployees(response.data);
    };

    fetchRecruitments();
    fetchEmployees();
  }, [endpoint]);

  return (
    <Authenticated>
      <div className="page_container">
        <div className="page_header">
          <span>Recruitment News</span>
        </div>
        <div className="page_body">
          {role === "24722a9d-ad40-4324-a044-50825421cc6c" && (
            <div className="form_container">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={recruitmentNews.title.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";
                      if (value === "") {
                        error = "Name is required.";
                      }

                      setRecruitmentNews({
                        ...recruitmentNews,
                        title: { value, error },
                      });
                    }}
                  />
                  <span className="form_error">
                    {recruitmentNews.title.error}
                  </span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Vacancies</Form.Label>
                  <Form.Control
                    type="text"
                    value={recruitmentNews.vacancies.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";
                      if (value === "") {
                        error = "Vacancies is required.";
                      }

                      setRecruitmentNews({
                        ...recruitmentNews,
                        vacancies: { value, error },
                      });
                    }}
                  />
                  <span className="form_error">
                    {recruitmentNews.vacancies.error}
                  </span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Manager</Form.Label>
                  <Form.Select
                    value={recruitmentNews.managerId.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";
                      if (value === "undefined") {
                        error = "Manager is required.";
                      }

                      setRecruitmentNews({
                        ...recruitmentNews,
                        managerId: { value, error },
                      });
                    }}
                  >
                    <option value={"undefined"}>Choose manager</option>
                    {employees.map((e) => {
                      return (
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <span className="form_error">
                    {recruitmentNews.managerId.error}
                  </span>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={recruitmentNews.description.value}
                    onChange={(e) => {
                      const value = e.target.value;

                      let error = "";

                      if (value === "") {
                        error = "Description is required.";
                      }

                      setRecruitmentNews({
                        ...recruitmentNews,
                        description: { value, error },
                      });
                    }}
                  />
                  <span className="form_error">
                    {recruitmentNews.description.error}
                  </span>
                </Form.Group>
              </Form>
              <div className="btn_section">
                <div className="danger_range">
                  <Button
                    variant="danger"
                    disabled={recruitmentNews.id === undefined}
                    onClick={() => {
                      endpoint.single
                        .delete({
                          pathParams: {
                            id: recruitmentNews.id,
                          },
                        })
                        .then((response) => {
                          if (response.status === 204) {
                            setRecruitmentNewsList([
                              ...recruitmentNewsList.filter(
                                (e) => e.id !== recruitmentNews.id
                              ),
                            ]);

                            setRecruitmentNews(emptyRecruitmentNews);
                          }
                        });
                    }}
                  >
                    Delete
                  </Button>
                </div>
                <div className="safe_range">
                  <Button
                    disabled={recruitmentNews === emptyRecruitmentNews}
                    onClick={() => {
                      setRecruitmentNews(emptyRecruitmentNews);
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="success"
                    disabled={recruitmentNews === emptyRecruitmentNews}
                    onClick={() => {
                      if (
                        recruitmentNews.title.value !== "" &&
                        recruitmentNews.vacancies.value !== "" &&
                        recruitmentNews.managerId.value !== "" &&
                        recruitmentNews.description.value !== ""
                      ) {
                        endpoint.list
                          .post({
                            body: {
                              title: recruitmentNews.title.value,
                              vacancies: recruitmentNews.vacancies.value,
                              managerId: recruitmentNews.managerId.value,
                              description: recruitmentNews.description.value,
                            },
                          })
                          .then((response) => {
                            if (response.status === 201) {
                              setRecruitmentNews(emptyRecruitmentNews);

                              setRecruitmentNewsList([
                                ...recruitmentNewsList,
                                response.data,
                              ]);
                            }
                          });
                      }
                    }}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          )}
          <Table
            height="70vh"
            config={{
              id: "Id",
              title: "Title",
              vacancies: "Vacancies",
              manager: "Manager",
              description: "Description",
            }}
            content={recruitmentNewsList.map((e) => ({
              ...e,
              manager: e.manager.name,
              key: e.id,
            }))}
            onRowSelect={(row) => {
              endpoint.single
                .get({ pathParams: { id: row.id } })
                .then((response) => {
                  const news = response.data;

                  setRecruitmentNews({
                    id: news.id,
                    description: {
                      value: news.description,
                      error: "",
                    },
                    managerId: {
                      value: news.manager.id,
                      error: "",
                    },
                    title: {
                      value: news.title,
                      error: "",
                    },
                    vacancies: {
                      value: news.vacancies,
                      error: "",
                    },
                  });
                });
            }}
          />
        </div>
      </div>
    </Authenticated>
  );
}
