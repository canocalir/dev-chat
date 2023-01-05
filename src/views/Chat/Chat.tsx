import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput/ChatInput";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Message from "../../components/Message/Message";
import { FC, useEffect, useRef } from "react";
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatLoadingContainer,
  ChatLoadingInner,
  ChatMessages,
  ToBottom,
} from "./Chat.styled";
import Main from "../Main/Main";
import { Comment } from "react-loader-spinner";
import imageLogo from "../../assets/mainlogo.jpg";

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

  if (loading) {
    return (
      <ChatLoadingContainer>
        <ChatLoadingInner>
          <img width={300} src={imageLogo} alt="logo" />
          <Comment
            visible={true}
            height="100"
            width="100"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#7eb910"
          />
        </ChatLoadingInner>
      </ChatLoadingContainer>
    );
  }

  const conditionalRenderingMessages =
    roomDetails && roomMessages ? (
      <>
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
          {roomMessages?.docs.map((doc) => {
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
          })}
          <ToBottom ref={chatRef} />
        </ChatMessages>
        <ChatInput
          scroll={scrollToBottom}
          channelId={roomId}
          channelName={activeRoomName}
        />
      </>
    ) : (
      <Main />
    );

  return <ChatContainer>{conditionalRenderingMessages}</ChatContainer>;
};

export default Chat;
