import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput/ChatInput";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Message from "../../components/Message/Message";
import { FC, useEffect, useRef } from "react";
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatMessages,
  ToBottom,
} from "./Chat.styled";

const Chat: FC = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const { roomId } = useAppSelector((state) => state.room);

  //Get Room Details
  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));

  //Get Room Messages by timestamp ascending
  const [roomMessages, loading] = useCollection(
    roomId &&
      query(
        collection(db, "rooms", roomId, "messages"),
        orderBy("timestamp", "asc")
      )
  );

  const activeRoomName = roomDetails?.data()?.channelName;

  //Scroll to bottom default behaviour
  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [roomId, loading]);

  const messages = roomMessages?.docs.map((doc) => {
    const { message, timestamp, user, userImage } = doc.data();
    return (
      <Message
        key={doc.id}
        message={message}
        timestamp={timestamp}
        user={user}
        userImage={userImage}
      />
    );
  });

  return (
    <ChatContainer>
      <>
        <ChatHeader>
          <ChatHeaderLeft>
            <h4>
              <strong>#{activeRoomName}</strong>
            </h4>
            <StarBorderOutlined />
          </ChatHeaderLeft>
          <ChatHeaderRight>
            <p>
              <InfoOutlined />
              Details
            </p>
          </ChatHeaderRight>
        </ChatHeader>
      </>
      <ChatMessages>
        {messages}
        <ToBottom ref={chatRef} />
      </ChatMessages>
      <ChatInput
        scroll={scrollToBottom}
        channelId={roomId}
        channelName={activeRoomName}
      />
    </ChatContainer>
  );
};

export default Chat;
