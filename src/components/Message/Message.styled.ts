import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.1rem;
  img {
    height: 2.5rem;
    border-radius: 0.5rem;
  }
`;

const MessageStamp = styled.div`
  padding-left: 0.7rem;
  span {
    font-size: 0.8rem;
    margin-left: 0.5rem;
    color: #666666;
  }
  p {
    margin-top: 0.8rem;
  }
`;

export { MessageContainer, MessageStamp };
