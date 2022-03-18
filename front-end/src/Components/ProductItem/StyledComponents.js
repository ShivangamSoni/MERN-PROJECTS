import styled from "styled-components";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(0, 100%, 0%, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  transition: all 500ms linear;
`;

export const Container = styled.div`
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;
  overflow: hidden;

  &:hover > ${Info} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  transition: all 350ms linear;

  &:hover {
    background-color: #69f5f5;
    transform: scale(1.2);
  }
`;
