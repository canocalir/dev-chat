import { collection } from "firebase/firestore";
import SidebarLink from "../SidebarLink/SidebarLink";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Sidebar.styled";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  MenuOpen,
  PeopleAlt,
} from "@material-ui/icons";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../utils/firebase";
import useGetGoogleData from "../../hooks/useGetGoogleData";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { collapseSidebar } from "../../features/sidebarSlice";

const Sidebar = () => {
  const [channels] = useCollection(collection(db, "rooms"));
  const { userName } = useGetGoogleData();

  const dispatch = useAppDispatch();
  const { isCollapsed } = useAppSelector((state) => state.sidebar);

  const closeSideBarHandler = () => {
    dispatch(collapseSidebar());
  };

  return (
    <SidebarContainer sideOpen={isCollapsed}>
      <SidebarHeader>
        <SidebarInfo>
          <h2>DevChat 1.0</h2>
          <h3>
            <FiberManualRecord />
            {userName}
          </h3>
          <hr />
          <p onClick={closeSideBarHandler}>
            <MenuOpen /> Close Sidebar
          </p>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarLink Icon={InsertComment} title={"Threads"} />
      <SidebarLink Icon={Inbox} title={"Mentions & Reactions"} />
      <SidebarLink Icon={Drafts} title={"Saved Items"} />
      <SidebarLink Icon={BookmarkBorder} title={"Channel Browser"} />
      <SidebarLink Icon={PeopleAlt} title={"People & User Groups"} />
      <SidebarLink Icon={Apps} title={"Apps"} />
      <SidebarLink Icon={FileCopy} title={"File Browser"} />
      <SidebarLink Icon={ExpandLess} title={"Show less"} />
      <hr />
      <SidebarLink Icon={ExpandMore} title={"Channels"} />
      <hr />
      <SidebarLink Icon={Add} addChannel title={"Add Channel"} />
      {channels?.docs.map((channel) => (
        <SidebarLink
          id={channel.id}
          key={channel.id}
          title={channel.data().channelName}
        />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
