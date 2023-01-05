import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { SideBarLinkProps } from "../../common/types/types";
import { openModal } from "../../features/modalSlice";
import { enterRoom } from "../../features/roomSlice";
import { SideBarLinkChannel, SideBarLinkContainer } from "./SidebarLink.styled";

const SidebarLink: FC<SideBarLinkProps> = ({ Icon, title, addChannel, id }) => {
  const dispatch = useAppDispatch();
  const iconConditional = Icon && (
    <Icon fontSize="small" style={{ padding: 10 }} />
  );

  const titleConditional = !Icon ? (
    <SideBarLinkChannel>
      <span>#</span>
      {title}
    </SideBarLinkChannel>
  ) : (
    <h3>{title}</h3>
  );

  const openModalHandler = () => {
    dispatch(openModal());
  };

  const selectChannelHandler = () => {
    id &&
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
  };

  const addChannelConditional = addChannel
    ? openModalHandler
    : selectChannelHandler;

  return (
    <SideBarLinkContainer onClick={addChannelConditional}>
      {iconConditional}
      {titleConditional}
    </SideBarLinkContainer>
  );
};

export default SidebarLink;
