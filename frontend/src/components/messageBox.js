import React from "react";

function MessageBox(props) {
  return <div className={`alert alert--${props.variant}`}>{props.message}</div>;
}

export default MessageBox;