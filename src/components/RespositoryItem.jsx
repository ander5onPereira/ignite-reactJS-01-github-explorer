import React from "react";

export default function RespositoryItem(props) {
  return (
    <li>
      <strong>{props.respository?.name ?? "Default"}</strong>
      <p>{props.respository?.description}</p>

      <a href={props.respository?.link}>Acessar repositórios</a>
    </li>
  );
}
