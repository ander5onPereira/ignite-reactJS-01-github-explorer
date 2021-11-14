import React from "react";

const repositoryName = "unform";

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>forms in React</p>

          <a href="">Acessar repositórios</a>
        </li>

        <li>
          <strong>unform</strong>
          <p>forms in React</p>

          <a href="">Acessar repositórios</a>
        </li>

        <li>
          <strong>unform</strong>
          <p>forms in React</p>

          <a href="">Acessar repositórios</a>
        </li>
      </ul>
    </section>
  );
}
