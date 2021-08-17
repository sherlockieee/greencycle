import React from "react";

type MessageBoxProps = {
  variant: 'danger' | 'success' | 'info' ;
  message: string;
}


function MessageBox(props: MessageBoxProps) {
  return <div className={`alert ${props.variant}`}>{props.message}</div>;
}

export default MessageBox;
