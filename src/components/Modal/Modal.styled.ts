import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000003d;
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(0.5rem);
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  flex-direction: column;
  width: 30%;
  height: fit-content;
  gap: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  position: relative;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    input {
      width: 100%;
      height: 2rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      padding-left: 1rem;
      border: none;
      background-color: #d4d4d4;
      color: #353535;
      outline: ${(props) => props.theme.modalColor1} 2px solid;
      &::placeholder {
        color: #525252;
      }
    }
  }
  > h3 {
    font-size: 1.5rem;
    color: #181818;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ModalButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.modalColor1};
  color: #ffffff;
  font-weight: 600;
  padding: 0.6rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 1rem;
  &:hover {
    background-color: #beeb42;
    transition: 300ms ease-in;
  }
`;

const CloseModalButton = styled.button`
  background-color: #df3f23;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 50%;
  width: 1.8rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.2rem;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #df2323;
    transition: 300ms ease-in;
  }
`;

export { ModalContainer, ModalBody, ModalButton, CloseModalButton };
