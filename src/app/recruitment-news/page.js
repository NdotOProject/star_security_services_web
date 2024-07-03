import React, { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import httpClient from "../../utils/HttpClient";

import "./page.css";

export default function Page() {
  const [recruitmentNewsList, setRecruitmentNewsList] = useState([]);

  useEffect(() => {
    const getRecruitments = async () => {
      const response = await httpClient.endpoints.recruitments.list.get();

      setRecruitmentNewsList(response.data);
    };

    getRecruitments();
  }, []);

  return (
    <div className={"page-container"}>
      <Container>
        {recruitmentNewsList.length === 0 ? (
          <div className={"empty-content"}>
            <span>There are no job postings</span>
          </div>
        ) : (
          <Accordion>
            {recruitmentNewsList.map((recruitmentNews) => {
              return (
                <Accordion.Item
                  key={recruitmentNews.id}
                  className={"news-container"}
                  eventKey={recruitmentNews.id}
                >
                  <Accordion.Header className={"news-header"}>
                    <span className={"news-title"}>
                      {recruitmentNews.title}
                    </span>
                    <span className={"news-vacancies"}>
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
