import React from "react";

export default function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      {console.log(props.repository.htm_url)}
      <a href={props.repository.html_url}>Acessar repositórios</a>
    </li>
  );
}
