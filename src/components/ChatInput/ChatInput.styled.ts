import styled from "styled-components";

const InputContainer = styled.div`
  border-radius: 1.2rem;
  form {
    position: relative;
    display: flex;
    justify-content: center;
    input {
      bottom: 2rem;
      width: 60%;
      border-radius: 0.3rem;
      padding: 1rem;
      border: 0.1rem solid #666;
      outline: none;
      position: fixed;
    }
    button {
      display: none;
    }
  }
`;

export {InputContainer}