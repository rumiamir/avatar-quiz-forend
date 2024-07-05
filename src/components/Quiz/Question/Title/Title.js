import React from "react";

function Title(props) {
  if (!props.title || props.title.question === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{props.title.question}</h1>
    </>
  );
}

export default Title;
