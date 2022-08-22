import styled from "styled-components";

const Box = styled.div`
  color: #e8604c;
  background-color: white;
  width: 25rem;
  height: 2.5rem;
  position: absolute;
  top: ${(props) => props.top};
  right: 12rem;
  border-radius: 5px;
  text-align: center;

  & p {
    margin: 10px 0;
    padding: 0;
  }

  &:hover {
    transform: translateX(10px);
    transition: all 0.3s;
    cursor: pointer;
  }
`;

export default Box;
