import { FC } from "react";
import { MessageProps } from "../../common/types/types";
import { MessageContainer, MessageStamp } from "./Message.styled";

const Message: FC<MessageProps> = ({ message, timestamp, user, userImage }) => {
  const date = new Date(timestamp.seconds * 1000).toUTCString();

  return (
    <MessageContainer>
      <img src={userImage} loading="lazy" />
      <MessageStamp>
        <strong>{user}</strong>
        <span>{date}</span>
        <p>{message}</p>
      </MessageStamp>
    </MessageContainer>
  );
};

export default Message;
