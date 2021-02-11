import React, { useState } from "react";
import styled from "styled-components";

const TimePiece = styled.div`
  span {
    display: block;
    max-width: 78px;
    padding: 8px;
    color: var(--color-green);
    border: 2px solid var(--color-green);
    border-radius: 25px;
  }
`;

const Time = () => {
  const getTime = () => {
    const now = new Date();
    const hours = `${now.getHours() < 10 ? "0" : ""}${now.getHours()}`;
    const minutes = `${now.getMinutes() < 10 ? "0" : ""}${now.getMinutes()}`;
    const seconds = `${now.getSeconds() < 10 ? "0" : ""}${now.getSeconds()}`;

    return `${hours}:${minutes}:${seconds}`;
  };
  const [time, setTime] = useState(getTime);

  setInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <TimePiece>
      <span>{time}</span>
    </TimePiece>
  );
};

export default Time;
