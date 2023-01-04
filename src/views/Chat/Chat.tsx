import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import ChatInput from "../../components/ChatInput/ChatInput";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Message from "../../components/Message/Message";

const Chat = () => {
  const { roomId } = useAppSelector((state) => state.room);
  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));

  const [roomMessages] = useCollection(
    roomId &&
      query(
        collection(db, "rooms", roomId, "messages"),
        orderBy("timestamp", "asc")
      )
  );

  const activeRoomName = roomDetails?.data()?.channelName;

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
      </ChatMessages>
      <ChatInput channelId={roomId} channelName={activeRoomName} />
    </ChatContainer>
  );
};

export default Chat;

const ChatMessages = styled.div``;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin: 4rem 0 0 1rem;
  margin-top: 5rem;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  border-bottom: 0.1rem solid #e9e9e9;
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
