import React, { useCallback, useState } from "react";
import { FaGithub, FaPlus } from "react-icons/fa";
import { api } from "../../services/api";
import * as s from "./mainStyle";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function submit() {
        const response = await api.get(`repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        };
        setRepositorios([...repositorios, data]);
        setNewRepo("");
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
      <s.Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar Repositórios"
          value={newRepo}
          onChange={handleInputChange}
        />
        <s.SubmitButton>
          <FaPlus color="#FFF" size={16} />
        </s.SubmitButton>
      </s.Form>
    </s.Container>
  );
}
