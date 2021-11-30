import React from "react";
import RespositoryItem from "./RespositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "htttp:/github.com/unform/unform",
};

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RespositoryItem repository={repository} />
        <RespositoryItem repository={repository} />
        <RespositoryItem repository={repository} />
        <RespositoryItem repository={repository} />
      </ul>
    </section>
  );
}
