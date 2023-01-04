import styled from "styled-components";

type Props = {
  message: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
  user: string;
  userImage: string;
};

const Message = ({ message, timestamp, user, userImage }: Props) => {
  const date = new Date(timestamp.seconds * 1000).toUTCString();

  return (
    <MessageContainer>
      <img src={userImage} loading="lazy" />
      <MessageStamp>
        <h4>
          {user}
          <span> {date}</span>
        </h4>
        <p>{message}</p>
      </MessageStamp>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1.1rem;
    img{
        height: 2.5rem;
        border-radius: 0.5rem;
    }
`;

const MessageStamp = styled.div`
    padding-left: 0.7rem;
`;
