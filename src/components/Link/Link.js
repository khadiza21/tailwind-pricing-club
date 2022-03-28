import React from "react";

const Link = (props) => {
  const {  link, name } = props.link;
  return <li ><a className=" mx-6 p-4 font-bold " href={link}> {name}</a></li>;
};

export default Link;
