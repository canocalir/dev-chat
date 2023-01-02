import { SideBarLinkProps } from "../../common/types/types";
import { SideBarLinkChannel, SideBarLinkContainer } from "./SidebarLink.styled";

const SidebarLink = ({ Icon, title, addChannel }: SideBarLinkProps) => {
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

  const addChannelHandler = () => {

  }
  const selectChannelHandler = () => {
    
  }

  const addChannelConditional = addChannel
    ? addChannelHandler
    : selectChannelHandler;

  return (
    <SideBarLinkContainer onClick={addChannelConditional}>
      {iconConditional}
      {titleConditional}
    </SideBarLinkContainer>
  );
};

export default SidebarLink;
