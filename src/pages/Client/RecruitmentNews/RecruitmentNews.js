import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";

import "./RecruitmentNews.css";
import httpClient from "../../../utils/HttpClient";

export default function RecruitmentNews() {
  const [recruitmentNewsList, setRecruitmentNewsList] = useState([]);

  useEffect(() => {
    const getRecruitments = async () => {
      const response = await httpClient.endpoints.recruitments.list.get();

      setRecruitmentNewsList(response.data);
    };

    getRecruitments();
  }, []);

  return (
    <div className={clsx("page-container")}>
      <Container>
        {recruitmentNewsList.length === 0 ? (
          <div className={clsx("empty-content")}>
            <span>There are no job postings</span>
          </div>
        ) : (
          <Accordion>
            {recruitmentNewsList.map((recruitmentNews) => {
              return (
                <Accordion.Item
                  key={recruitmentNews.id}
                  className={clsx("news-container")}
                  eventKey={recruitmentNews.id}
                >
                  <Accordion.Header className={clsx("news-header")}>
                    <span className={clsx("news-title")}>
                      {recruitmentNews.title}
                    </span>
                    <span className={clsx("news-vacancies")}>
                      Vacancies: {recruitmentNews.vacancies}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>{recruitmentNews.description}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        )}
      </Container>
    </div>
  );
}
