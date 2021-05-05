import styled from "styled-components";

export const Container = styled.div`
  width: 348px;
  height: ${(props) => props.height};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: #dbdbdb;
  border-width: 1px;
  border-style: solid;
`;
