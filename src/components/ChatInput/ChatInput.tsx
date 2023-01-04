import { Button } from "@material-ui/core";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../config/firebase";

type Props = {
  channelId: string | null;
  channelName: string | null;
};

const ChatInput = ({ channelName, channelId }: Props) => {
  const [inputText, setInputText] = useState<string>("");
  const sendMessageHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(!channelId) return false
    const messageRef = collection(db, "rooms", channelId, "messages")
    addDoc(messageRef, {
      message: inputText,
      timestamp: Timestamp.fromDate(new Date()),
      user: 'Can',
      userImage: ''
    });
    setInputText('')
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
