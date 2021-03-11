import React, { useState } from "react";
import styled from "styled-components";

import {
  ToggleLabel,
  ToggleWrapper,
  ToggleSlider,
  HiddenLabel,
  HiddenInput,
} from "../style/compstyling/styledSlider";

const TimePiece = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;

  .time-display {
    display: block;
    font-size: 16px;
    color: var(--color-white);
  }
`;

const Time = () => {
  const [viewSeconds, setViewSeconds] = useState(false);

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
      <span className="time-display">
        {viewSeconds ? time : time.substr(0, 5)}
      </span>
      <ToggleWrapper>
        <ToggleLabel>
          <HiddenLabel />
          <HiddenInput
            type="checkbox"
            name="toggleSeconds"
            checked={viewSeconds}
            onChange={() => setViewSeconds(!viewSeconds)}
          />
          <ToggleSlider />
        </ToggleLabel>
      </ToggleWrapper>
    </TimePiece>
  );
};

export default Time;
