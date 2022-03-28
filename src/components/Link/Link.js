import React from "react";

const Link = (props) => {
  const {  link, name } = props.link;
  return <li ><a href={link}> {name}</a></li>;
};

export default Link;
