import { Button } from "@material-ui/core";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import React, { FC, useState } from "react";
import { db } from "../../utils/firebase";
import { InputContainer } from "./ChatInput.styled";
import { ChatInputProps } from "../../common/types/types";
import useGetGoogleData from "../../hooks/useGetGoogleData";

const ChatInput:FC<ChatInputProps> = ({ channelName, channelId, scroll }) => {
  const [inputText, setInputText] = useState<string>("");
  const { userName, userImage } = useGetGoogleData();

  const sendMessageHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!channelId) return false;
    //Send message to the database
    const messageRef = collection(db, "rooms", channelId, "messages");
    addDoc(messageRef, {
      message: inputText,
      timestamp: Timestamp.fromDate(new Date()),
      user: userName,
      userImage: userImage,
    });
    scroll();
    setInputText("");
  };
  
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <InputContainer>
      <form>
        <input
          value={inputText}
          onChange={inputHandler}
          placeholder={`Message #${channelName}`}
          type="text"
        />
        <Button hidden type="submit" onClick={sendMessageHandler}>
          SEND
        </Button>
      </form>
    </InputContainer>
  );
};

export default ChatInput;
