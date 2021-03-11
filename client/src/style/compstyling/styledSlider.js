import styled from "styled-components";

export const ToggleWrapper = styled.div`
  position: relative;
  margin-left: 35px;
  padding-top: 5px;
  z-index: 5;
`;
export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-right: 20px;
  width: 20px;
  height: 24px;
`;

export const HiddenLabel = styled.label`
  position: absolute !important;
  display: inline-block;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
`;

export const ToggleSlider = styled.span`
  position: relative;
  display: block;
  background: grey;
  width: 30px;
  height: 12px;
  inset: 0px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.4s ease 0s;

  ::before {
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    background: #555;
    border-radius: 50%;
    transition: all 0.4s ease;
  }
`;
export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;

  :checked + ${ToggleSlider} {
    background: #41b883;
    transition: all 0.4s ease;
  }
  :checked + ${ToggleSlider}:before {
    background: white;
    transform: translateX(20px);
    transition: all 0.4s ease;
  }
`;
