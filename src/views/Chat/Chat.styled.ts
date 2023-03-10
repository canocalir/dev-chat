import styled from "styled-components";

const ChatMessages = styled.div``;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin: 4rem 0 0 0;
  margin-top: 4rem;
  background: ${props => props.theme.bgColorMain};
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.midBorderColor};
`;

const ChatHeaderRight = styled.div`
  p {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }
  .MuiSvgIcon-root {
    font-size: 1.4rem;
    margin-right: 0.2rem;
  }
`;

const ChatHeaderLeft = styled.div`
  display: flex;
  h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
    margin-right: 0.4rem;
  }
  .MuiSvgIcon-root {
    font-size: 1.4rem;
  }
`;

const ToBottom = styled.div`
  padding-bottom: 12rem;
`;

const ChatLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const ChatLoadingInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {
  ToBottom,
  ChatContainer,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatMessages,
  ChatLoadingContainer,
  ChatLoadingInner,
};
