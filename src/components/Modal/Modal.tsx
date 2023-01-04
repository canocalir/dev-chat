import { FC, useState } from "react";
import {
  ModalBody,
  ModalButton,
  ModalContainer,
  CloseModalButton,
} from "./Modal.styled";
import { useAppDispatch } from "../../app/hooks";
import { openModal, selectName } from "../../features/modalSlice";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { toastError, toastSuccess } from "../../helpers/toastify/success";

const CustomModal: FC = () => {
  const [channelName, setChannelName] = useState<string>("");

  const dispatch = useAppDispatch();

  const channelNameSetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelName(e.target.value);
  };

  const channelNameToDatabaseHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (channelName) {
      //Send channel name to database
      addDoc(collection(db, "rooms"), {
        channelName: channelName,
      });
      //Send selected name to global store
      dispatch(selectName(channelName));
      dispatch(openModal());
      toastSuccess(channelName);
    } else {
      toastError();
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
