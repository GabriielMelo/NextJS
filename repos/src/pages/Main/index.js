import React, { useCallback, useEffect, useState } from "react";
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";

import { api } from "../../services/api";
import * as s from "./mainStyle";

import { Link } from "react-router-dom";
export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const localStorageRepos = localStorage.getItem("repos");
    if (localStorageRepos) {
      setRepositorios(JSON.parse(localStorageRepos));
    }
  }, []);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  const handleDelete = useCallback(
    (repos) => {
      const find = repositorios.filter((r) => r.name !== repos);
      setRepositorios(find);
    },
    [repositorios]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function submit() {
        setLoading(true);
        setAlert(null);
        try {
          if (newRepo === "") {
            throw new Error("Voce precisa indicar um repositorio");
          }

          const response = await api.get(`repos/${newRepo}`);

          const hasRepo = repositorios.find((repos) => repos.name === newRepo);

          if (hasRepo) {
            throw new Error("Repositorio Duplicado");
          }
          const data = {
            name: response.data.full_name,
          };

          setRepositorios([...repositorios, data]);

          localStorage.setItem(
            "repos",
            JSON.stringify([...repositorios, data])
          );
          setNewRepo("");
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      submit();
    },
    [newRepo, repositorios]
  );

  return (
    <s.Container>
      <h1>
        <FaGithub size={25} /> Meus Repositorios
      </h1>
      <s.Form onSubmit={handleSubmit} error={alert}>
        <input
          type="text"
          placeholder="Adicionar Repositórios"
          value={newRepo}
          onChange={handleInputChange}
        />
        <s.SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#FFF" size={16} />
          )}
        </s.SubmitButton>
      </s.Form>
      <s.List>
        {repositorios.map((repos) => (
          <li key={repos.name}>
            <span>
              <s.DeleteButton onClick={() => handleDelete(repos.name)}>
                <FaTrash size={14} />
              </s.DeleteButton>
              {repos.name}
            </span>
            <Link to={`/repositorio/${encodeURIComponent(repos.name)}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </s.List>
    </s.Container>
  );
}
