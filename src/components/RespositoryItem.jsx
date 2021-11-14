import React from "react";

export default function RespositoryItem(props) {
  return (
    <li>
      <strong>{props.respository.name ?? "Default"}</strong>
      <p>{propsl.respository.description}</p>

      <a href={propsl.respository.link}>Acessar repositórios</a>
    </li>
  );
}
