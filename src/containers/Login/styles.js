import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fafafa;
  height: 100vh;
  align-items: center;
`;

export const PhoneExample = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 618px;
  width: 454px;
  @media (max-width: 876px) {
    display: none;
  }
`;
