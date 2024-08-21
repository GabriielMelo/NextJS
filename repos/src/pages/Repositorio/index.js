import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
  IoChevronBackCircleSharp,
  IoChevronForwardCircleSharp,
} from "react-icons/io5";
import { api } from "../../services/api";
import * as s from "./repositoriosStyle";

export default function Repositorio({ match }) {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [stateIssue, setStateIssue] = useState("open");
  useEffect(() => {
    async function load() {
      const repoName = decodeURIComponent(match.params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: stateIssue,
            per_page: 5,
          },
        }),
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
      console.log(repositorioData.data);
      console.log(issuesData.data);
    }
    load();
  }, [match.params.repositorio, stateIssue]);

  function handlePage(action) {
    setPage(action === "next" ? page + 1 : page - 1);
  }
  useEffect(() => {
    async function loadIssue() {
      const repoName = decodeURIComponent(match.params.repositorio);
      const response = await api.get(`repos/${repoName}/issues`, {
        params: {
          state: stateIssue,
          page: page,
          per_page: 5,
        },
      });
      setIssues(response.data);
    }
    loadIssue();
  }, [match.params.repositorio, page, stateIssue]);

  if (loading) {
    return (
      <s.Loading>
        <p>Carregando...</p>
      </s.Loading>
    );
  }

  return (
    <s.Container>
      <s.BackButton to="/">
        <FaArrowLeft size={30} color="#0D2636"></FaArrowLeft>
      </s.BackButton>
      <s.Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </s.Owner>
      <s.StatesContainer>
        <button
          onClick={() => {
            setStateIssue("all");
            setPage(1);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setStateIssue("open");
            setPage(1);
          }}
        >
          Open
        </button>
        <button
          onClick={() => {
            setStateIssue("closed");
            setPage(1);
          }}
        >
          Closed
        </button>
      </s.StatesContainer>
      <s.IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url} target="_blank" rel="noreferrer">
                  {issue.title}
                </a>
                {issue.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </s.IssuesList>
      <s.PageAction>
        <button
          type="button"
          onClick={() => handlePage("back")}
          disabled={page === 1}
        >
          <IoChevronBackCircleSharp size={36} />
        </button>
        <button type="button" onClick={() => handlePage("next")}>
          <IoChevronForwardCircleSharp size={36} />
        </button>
      </s.PageAction>
    </s.Container>
  );
}
