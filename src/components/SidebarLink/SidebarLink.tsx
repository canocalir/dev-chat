import { useAppDispatch } from "../../app/hooks";
import { SideBarLinkProps } from "../../common/types/types";
import { openModal } from "../../features/modalSlice";
import { SideBarLinkChannel, SideBarLinkContainer } from "./SidebarLink.styled";

const SidebarLink = ({ Icon, title, addChannel, id }: SideBarLinkProps) => {
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

  const selectChannelHandler = () => {};

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