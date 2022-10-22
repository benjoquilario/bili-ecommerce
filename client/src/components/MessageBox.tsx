import React from "react";

type MessageBoxProps = {
  errorMessage: string;
};

const MessageBox = ({ errorMessage }: MessageBoxProps): JSX.Element => {
  return <div>{errorMessage}</div>;
};

export default MessageBox;
