import { Component, JSX } from "solid-js";

const Year: Component<JSX.TimeHTMLAttributes<HTMLElement>> = (props) => {
  const now = new Date();

  return (
    <time {...props} dateTime={now.toISOString()}>
      {now.getFullYear()}
    </time>
  );
};

export default Year;
