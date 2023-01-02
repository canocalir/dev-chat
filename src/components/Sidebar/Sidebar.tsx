import SidebarLink from "../SidebarLink/SidebarLink"
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Sidebar.styled"
import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from "@material-ui/icons"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Dev Chat Community</h2>
          <h3>
            <FiberManualRecord/>
            Can Ocalir
          </h3>
        </SidebarInfo>
        <Create/>
      </SidebarHeader>
      <SidebarLink Icon={InsertComment} title={"Threads"}/>
      <SidebarLink Icon={Inbox} title={"Mentions & Reactions"}/>
      <SidebarLink Icon={Drafts} title={"Saved Items"}/>
      <SidebarLink Icon={BookmarkBorder} title={"Channel Browser"}/>
      <SidebarLink Icon={PeopleAlt} title={"People & User Groups"}/>
      <SidebarLink Icon={Apps} title={"Apps"}/>
      <SidebarLink Icon={FileCopy} title={"File Browser"}/>
      <SidebarLink Icon={ExpandLess} title={"Show less"}/>
      <hr />
      <SidebarLink Icon={ExpandMore} title={"Channels"}/>
      <hr />
      <SidebarLink Icon={Add} addChannel title={"Add Channel"}/>
    </SidebarContainer>
  )
}

export default Sidebar