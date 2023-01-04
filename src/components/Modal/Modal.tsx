import React, { useState } from "react";
import {
  ModalBody,
  ModalButton,
  ModalContainer,
  CloseModalButton,
} from "./Modal.styled";
import { useAppDispatch } from "../../app/hooks";
import { openModal, selectName } from "../../features/modalSlice";
import { toast } from "react-toastify";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const CustomModal = () => {
  const [channelName, setChannelName] = useState<string>("");

  const dispatch = useAppDispatch();

  const channelNameSetHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChannelName((e.target.value));
  };

  const channelNameToDatabaseHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (channelName) {
      addDoc(collection(db, "rooms"), {
        channelName: channelName,
      });
      dispatch(selectName(channelName));
      dispatch(openModal());
      toast(`${channelName} channel successfully created`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("Enter a channel name!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const closeModalHandler = () => {
    dispatch(openModal());
  };

  return (
    <ModalContainer>
      <ModalBody>
        <CloseModalButton onClick={closeModalHandler}>X</CloseModalButton>
        <h3>Enter channel name</h3>
        <form onSubmit={channelNameToDatabaseHandler}>
          <input
            onChange={channelNameSetHandler}
            placeholder="Enter channel name"
            type="text"
            value={channelName}
          />
          <ModalButton type="submit">Add Channel</ModalButton>
        </form>
      </ModalBody>
    </ModalContainer>
  );
};

export default CustomModal;
